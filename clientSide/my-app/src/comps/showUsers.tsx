import { useContext } from "react";
import Users from "../userContext";
import '../myStyle/tabels.css'
import { User } from "../classes/User";

const ShowUsers = () => {
  //@ts-ignore
   const list:Array<User> = useContext(Users).usersList
  
   const checkIsManager=(val:boolean | undefined)=>{
    if (val) return 'true'
    return 'false'
  }

return <> 
  
  <table className="table">
    <thead>
  <tr>
    <th>user name</th>
    <th>password</th>
    <th>address</th>
    <th>phone</th>
    <th>isManager</th>
    <th>favoriteRecipes</th>
  </tr>  
    </thead>
    <tbody>
    {list?.map((k:User)=>(<tr>
      <td>{k.name}</td>
      <td>{k.password}</td>  
      <td>{k.address}</td>
      <td>{k.phone}</td>
      <td> {checkIsManager(k.isManager)}</td>
      <td>{k.favoriteRecipes?.map((l:string)=>(<p>{l}</p>))}</td>
    </tr>))}
    </tbody>

  </table>
  </>
};
export default ShowUsers;


// איך לשלוף את הקוד של המשתמש כי הוא לא נכלל במחלקה ואני רוצה להציג אותו
// איך מציגים ערך בוליאני כי הוא לא נותן לי להציג האם הלקוח הוא מנהל או לא