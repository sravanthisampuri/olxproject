import{ Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name:"filter"
})

export class FilterPipe implements PipeTransform{

filterdata=[];
    transform(value:any, search){

        console.log(value,search)
        if(search===undefined){
            return value;
        }
        else{
            this.filterdata=[];
            for(let k of value){
                console.log(k)
                if(k.toLowerCase().indexOf(search)>=0){
                    console.log(k.indexOf(search))
                    this.filterdata.push(k);
                }
            }
        }return this.filterdata;
    }
}