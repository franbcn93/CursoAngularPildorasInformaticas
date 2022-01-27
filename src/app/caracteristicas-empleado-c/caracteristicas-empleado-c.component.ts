import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  ngOnInit(): void {
  }

  // constructor(private miServicio:ServicioEmpleadosService){
  // }


  agregaCaracteristica(nuevaCaracteristica: string){
    // this.miServicio.muestraMensaje(nuevaCaracteristica);
    // this.caracteristicasEmpleados.emit(nuevaCaracteristica);
  }
 
  
}
