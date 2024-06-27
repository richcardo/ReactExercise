function Card({title, imgUrl}) {

    /*const cities = [
        {
            id: 0,
            title : 'Tokyo',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantiu',
            imgUrl : 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

        }, 
        {
            id: 1,
            title : 'New York',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantiu',
            imgUrl : 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

        }
    ]
    const title = 'Titolo Casuale'
    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantiu'
    const imgUrl = 'https://images.unsplash.com/photo-1719273659346-feb0ae0c38fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

*/
  return (
    <div className="rounded-lg bg-zinc-950">
      <img
        className=""
        src={imgUrl}
        alt=""
      />
      <div className='flex flex-col p-4'>
        <h2 className="text-2xl text-white font-bold">{title}</h2>
        <p className="text-zinc-300 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantiu
        </p>
      </div>
    </div>
  );
}

export default Card;
