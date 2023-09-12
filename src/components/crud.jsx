import './style.css'
import {Students} from './mock.jsx'

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
            <table border='1px' className='box__line'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Age</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jack</td>
                  <td>Smith</td>
                  <td>30</td>
                  <td>Software Engineer</td>
                  <td>
                    <button className='btns ditail'>Ditail</button>
                    <button className='btns edit'>Edit</button>
                    <button className='btns delete'>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>

        </div>

    </div>
  )
}

export default Crud