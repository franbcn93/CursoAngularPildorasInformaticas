import { Injectable } from "@angular/core";
import { Empleado } from "./Empleado";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

    }
    empleados: Empleado[] = [
        new Empleado("Paco","París","elec",3000),
        new Empleado("Yaz","Guarnizo","Jefa",1000),
        new Empleado("Sofia","París","elec",300),
        new Empleado("Adam","París","elec",100),
      ];
      agregarEmpleadoServicio(empleado:Empleado){
          this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar " + "\n" +
          empleado.nombre + "\n" + empleado.salario);
          
          this.empleados.push(empleado);
      }
}