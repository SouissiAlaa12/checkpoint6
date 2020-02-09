class Human {
    name; 
    job; 
    skills; 

    constructor()
    {
        this.name= "";
        this.job= "";
        this.skills= [];


    }

    getJob(a)
        {
          this.job = a
        } ; 
    leaveJob(){
            this.job="unemployed" ; 
    } ; 
    learnNewSkill(c){
        this.skills.push(c) ; 
    } ; 

    forgetSkill(d){

   this.skills=  this.skills.filter(a => a !=d ) ; 
    } ;
    
}
class Student extends Human{

    constructor(){
        super() ; 

    }

}


const me = new Student();

me.getJob(“Web developer”);

me.learnNewSkill(“React”);

me.forgetSkill(“React”);

me.leaveJob();