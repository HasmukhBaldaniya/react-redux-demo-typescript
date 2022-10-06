import { useEffect, useState } from "react";
import "./App.css";
import Input from "./stories/components/Input/Input.component";
import Checkbox from "./stories/components/Checkbox";
import { useAddUserDetailsMutation, useLazyGetUserDetailsQuery } from "./feature/authentication";

function App() {
  const [value, setValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [getUserDetails, result, lastPromiseInfo] = useLazyGetUserDetailsQuery();
  const [addUserDetails] = useAddUserDetailsMutation();
   
  const onChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxValue(e.target.checked);
  };

  const onGetApiCall = () => {
    getUserDetails({name: 'hasmukh', email: 'hasmukh@smartsernsesolutions.com'}).then((res=> {
     // console.log('res =>', res.data);
    }))
  }
  
  const onFormSubmit = () => {
    const formData = new FormData();
    formData.append('name', 'Hasmukh')
    addUserDetails(formData).then((res=> {
     // console.log('res =>', res.data);
    }))
  }

  useEffect(() => {
    console.log('result ->', result);
  }, [result])
  
  useEffect(() => {
    console.log('lastPromiseInfo ->', lastPromiseInfo);
  }, [lastPromiseInfo])

  useEffect(() => {
    onGetApiCall()
  }, [])

  return (
    <div className="App">
      <button onClick={onGetApiCall}>Api call</button>
      <button onClick={onFormSubmit}>Submit</button>
      <h1>React</h1>
      <Input
        label={"First name"}
        variant={"filled"}
        onChange={(e: string) => setValue(e)}
        disabled={false}
        defaultValue={value}
      />

      <Checkbox
        label="checkbox"
        checked={checkboxValue}
        size="medium"
        disabled={false}
        onChange={(e) => onChangeEventHandler(e)}
      />
    </div>
  );
}

export default App;
