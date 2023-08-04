import { useState,useEffect } from 'react'
import Search from './components/Search'
import Renderer from './components/Renderer';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [nameList,setNameList] = useState([]);
  const [changed,setChanged] = useState(false);
  const [itemIndex,setItemIndex] = useState(null);

  const handleChange = (event) =>{
    if (event.target.id == 'first') {
      setFirstName(event.target.value);
    }else if(event.target.id == 'second'){
      setLastName(event.target.value);
    } 
  }

  const eraser = () =>{
    setFirstName('');
    setLastName('');
    setItemIndex(null);
  }

  const handleSubmit = () =>{
    if(changed){
      setChanged(false);
      let a = Object.assign([],nameList)
      a[itemIndex]=firstName+' '+lastName;
      setNameList(a);
    }else{
      if (firstName.length > 0 && lastName.length > 0){
        let newArr = [...nameList,firstName + ' '+ lastName];
        setNameList(newArr);
      }
    }
    eraser();
  }

  const remove = (index) =>{
    let list = [...nameList];
    list.splice(index,1);
    setNameList(list);
    eraser();
    setChanged(false);
  }

  const update = (index) =>{
    setChanged(true);
    let list = nameList.filter((element,ind)=> ind == index);
    let string = list[0];
    const spaceindex = string.indexOf(' ');
    const firstString = string.substring(0,spaceindex);
    const lastString = string.substring(spaceindex+1);

    setFirstName(firstString);
    setLastName(lastString);
    setItemIndex(index);
  }  

  useEffect(()=>{
    document.title = "CRUD";
  },[])

  return (
    <>
      <div className='bg-gray-700 min-h-screen flex flex-col justify-center place-items-center dark:text-white'>
        <h1 className='font-bold text-2xl'>CRUD</h1>
        <div className='mt-5'>
          <Search firstName={firstName} lastName={lastName} handleChange={handleChange} handleSubmit={handleSubmit} changed={changed}></Search>
        </div>
        <div className='mt-3'>
          <Renderer nameList={nameList} remove={remove} update={update} itemIndex={itemIndex}></Renderer>
        </div>
      </div>
    </>
  )
}

export default App
