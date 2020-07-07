export class ToggleWeightService{
  convertToPounds(weight:number){
    weight = weight*(1/0.4536);
  }

  convertUnit(unit:string){
    unit = 'lbs';
  }
}
