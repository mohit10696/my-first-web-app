export class recipe{
    public name:string;
    public des:string;
    public imagePath:string;
    
    constructor(name:string,des:string,image:string){
        this.des = des;
        this.imagePath = image;
        this.name = name;
    }
    
}