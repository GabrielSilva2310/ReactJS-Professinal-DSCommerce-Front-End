import './styles.css';
import * as userService from '../../../services/user-service';
import { useEffect, useState } from 'react';
import { UserDTO } from '../../../models/user';


export default function AdminHome() {

   const [user, setUser] = useState<UserDTO>();

    useEffect(() => {
        userService.findMe()
            .then(response => {
                setUser(response.data);
                console.log(response.data);
            })
            .catch(error => {
              console.log("Error" + error);
            })
    }, [])




  return (
    <main>
      <section id="admin-home-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">
          Bem-vindo à área administrativa {user?.name}
        </h2>
      </section>
    </main>
  );
}
