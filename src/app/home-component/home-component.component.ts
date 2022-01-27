import { Component, OnInit } from '@angular/core';
import { Empleado } from '../Empleado';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
  
  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { 
  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  empleados: Empleado[] = [];
  // empleados: Empleado[] = [
  //   new Empleado("Paco","París","elec",3000),
  //   new Empleado("Yaz","Guarnizo","Jefa",1000),
  //   new Empleado("Sofia","París","elec",300),
  //   new Empleado("Adam","París","elec",100),
  // ];

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre, 
      this.cuadroApellido, 
      this.cuadroCargo, 
      this.cuadroSalario
    );
    // this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    // this.empleados.push(miEmpleado);
  }

}
