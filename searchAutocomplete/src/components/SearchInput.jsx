import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchInput = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useState("");
  const [dropdown, setDropDown] = useState(false);
  const [filterUser, setFilterUser] = useState([]);
 

  // fetch userData
  async function userFetchData() {
    try {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/users");
      const userList = res.data;
      setUser(userList.users.map((e) => e.firstName));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(users, filterUser);

  useEffect(() => {
    userFetchData();
  }, []);


  function onchangeHandle(e){
    const value = e.target.value;
    setParams(value);

    if(value.length>1){
      const filterData = users && users.length ? users.filter((e)=>e.toLowerCase().indexOf(value)>-1):[];
      setFilterUser(filterData);
      setDropDown(true);
    }
    else{
      setDropDown(false);
    }
  }

  function clickHandle(e){
    const val = e.target.textContent;
    console.log(val);

    setParams(val);
    setDropDown(false);
  }


  if(loading){
    return <div>loading........</div>
  }



  return (
    <>
      <div>
        <input onChange={onchangeHandle} value={params} type="text" placeholder="search users.." />
        {
          dropdown&&filterUser.length?filterUser.map((e, idx)=><h3 onClick={clickHandle} key={idx}>{e}</h3>):null
        }
      </div>
    </>
  );
};

export default SearchInput;
