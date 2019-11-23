var initialState =[
    {
           img: 'https://www.lottecinemavn.com/Media/WebAdmin/17f485dc6a02443e9b1ed7c78b8810fa.jpg',
           name: 'COMBO CHO FA',
           gia: 75000
       },
       {
           img: 'https://www.lottecinemavn.com/Media/WebAdmin/91ed3e7130a9482f9cd857d126a07f55.jpg',
           name: 'COMBO CHO SUKZAT',
           gia: 100000
       },
       {
           img: 'https://www.lottecinemavn.com/Media/WebAdmin/b434e4275dcc434e8b3e6025d9c949fb.jpg',
           name: 'COMBO TIÊN HẮC ÁM',
           gia: 219000
       },
       {
        img: 'https://www.lottecinemavn.com/Media/WebAdmin/8ce4327f4a394069b5ef265540f968ae.jpg',
        name: 'COMBO FROZEN II',
        gia: 149000
    }
   
   ]

const products = ( state = initialState, action ) =>{
    switch (action.type){
        default: 
            return[...state];
    }
 
}
export default products