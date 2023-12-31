import React,{useState} from 'react'

export const FormularioComponent = () => {

const [usuario, setUsuario] = useState({}); 

  const conseguirDatosFormulario = e => {

        e.preventDefault();

        let datos = e.target;

        let usuario = {
          nombre: datos.nombre.value,
          apellido: datos.apellido.value,
          genero: datos.genero.value,
          bio: datos.bio.value,
          enviar: datos.enviar.value
        };

      console.log(usuario);
      setUsuario(usuario);
      };

      const cambiarDatos = e =>{
      let name_del_input = e.target.name 
      let usuario_para_modificar = usuario;
      
      //usuario_para_modificar[name_del_input] = e.target.value;

  setUsuario (estado_previo => ({
            ...estado_previo,
            [name_del_input]: e.target.value
          })
        );

      console.log(usuario)

      }

    return (
    <div>
    <h1>Formularios con React</h1>
  
    {usuario.enviar && 
    (<div className='info_usuario label label-gray'>
    {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su biografia esta aqui <p>{usuario}</p>
    </div>
    )
    }
      
    <form onSubmit={conseguirDatosFormulario}>
    <input type='text' 
      placeholder='Nombre'
      name='nombre'
      onChange={cambiarDatos}
  />
    <input type='text' 
      placeholder='Apellido'
      name='apellido'
      onChange={cambiarDatos}/>
      

    <select  name='genero'>

    <option value="hombre">Hombre</option>

    <option value="mujer">Mujer</option>

    </select>

    <textarea placeholder='biografia'
      name='biografia'
      onChange={cambiarDatos}
      textarea>
    </textarea>

<input type='submit' value="Enviar" name='enviar'/>
    </form>

    </div>
  )
}


