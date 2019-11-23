/**
 * Convert a `File` object returned by the upload input into
 * a base 64 string. That's easier to use on FakeRest, used on
 * the ng-admin example. But that's probably not the most optimized
 * way to do in a production database.
 */
var temp = "";
var temp1 = "";
const convertFileToBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});

/**
 * For posts update only, convert uploaded image in base 64 and attach it to
 * the `picture` sent property, with `src` and `title` attributes.
 */
const addUploadCapabilities = requestHandler => (type, resource, params) => {
    if ((type === 'UPDATE' || type === 'CREATE') && resource === 'phim') {
        if ((params.data.anhphim && params.data.anhphim.length)) {
            // only freshly dropped pictures are instance of File
            const formerPictures = params.data.anhphim.filter(p => !(p.rawFile instanceof File));
            const newPictures = params.data.anhphim.filter(p => p.rawFile instanceof File);

            const formerVideo = params.data.phim_trailer.filter(p => !(p.rawFile instanceof File));
            const newVideo = params.data.phim_trailer.filter(p => p.rawFile instanceof File);
            Promise.all(newVideo.map(convertFileToBase64))
                .then(base64Pictures => base64Pictures.map(picture64 => (
                    temp1 = picture64, {
                        src: picture64,
                        title: `${params.data.id}`,

                    })))
            return Promise.all(newPictures.map(convertFileToBase64))
                .then(base64Pictures => base64Pictures.map(picture64 => (
                    temp = picture64, {
                        src: picture64,
                        title: `${params.data.id}`,

                    })))
                .then(transformedNewPictures => requestHandler(type, resource, {
                    ...params,
                    data: {
                        ...params.data,
                        anhphim: temp,
                        phim_trailer: temp1,
                    },
                }));
        }
    }

    return requestHandler(type, resource, params);
};

export default addUploadCapabilities;