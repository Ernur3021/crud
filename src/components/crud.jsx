import './style.css'

const Crud = () => {
  return (
    <div className='container'>
        <div className='border__run margin_auto'>
            <h1 className='first__title'>CRUD React</h1>
            <p className='lorem__text margin_auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem labore in ullam architecto quos, modi odit est voluptas iste!</p>
            <button className='first btn'>Learn More</button> 
            <br/>
            <div className='navbar'>
                <button className='second btn'>Create User</button>
                <input type='search' placeholder='Search...' className='search'></input>
            </div> 

        </div>

    </div>
  )
}

export default Crud