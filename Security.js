class Security {

    constructor(){

        // Add code to create the input and button elements
        
    this.access1 = createInput("").attribute("placeholder", "Code1");
    this.access1.position(32,88) 
    this.access1.style('background','white');

    this.button1 = createButton("check")
    this.button1.position(32,115) 
    this.button1.style('background','lightgrey');
       

    this.access2 = createInput("").attribute("placeholder", "Code2");
    this.access2.position(759,99) 
    this.access2.style('background','white');

    this.button2 = createButton("check")
    this.button2.position(759,129) 
    this.button2.style('background','lightgrey'); 
  
      
    this.access3 = createInput("").attribute("placeholder", "Code3");
    this.access3.position(20,391) 
    this.access3.style('background','white');

    this.button3 = createButton("check")
    this.button3.position(20,421) 
    this.button3.style('background','lightgrey'); 
    
    

    
    }

    display(){

        // Add code to make the buttons function as expected
 
         this.button1.mousePressed(() => {
     if(system.authenticate(accessCode1,this.access1.value())){
       this.button1.hide()
       this.access1.hide()
        score++;
     }})
        
        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
              this.button2.hide()
              this.access2.hide()
               score++;
              
          } })

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
              this.button3.hide()
              this.access3.hide()
               score++;
              
            }})
       
 }
   
        
    
    
   
    

    
    
   

    
   
  
   

        
    
  

    
}