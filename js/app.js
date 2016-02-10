var ParlaModel = {
  
   /* Langs contain the list of language with their corresponding
    * dictionaries 
    */
   langs : languages, 
  
   /* Returns the score of the given phrase in the given language
    * The score is computed simply as the number of words - in the
    * language dictionary - that are found in the phrase
    * @return score, if language is valid
    *         null, if language is not valid
    */
   getLanguageScore : function (phrase, language){
     // write your code here, but don't add any additional 
     // parameters to the the function     
       var num = 0;
      
            
           if(language == "Italiano" ){
               for(var j =0; j<ita.length;j++){
                    if(phrase == ita[j]){
                        num++;
                    }
               }
           }
       if(language == "Inglese" ){
               for(var j =0; j<eng.length;j++){
                    if(phrase == eng[j]){
                        num++;
                    }
               }
           }
       if(language == "Spagnolo" ){
               for(var j =0; j<spa.length;j++){
                    if(phrase == spa[j]){
                        num++;
                    }
               }
           }

       return num;
   },
  
   /* Returns the name of the language in which the phrase
    * (most likely) is written. The detection essentially 
    * returns the language with higher *score*. 
    */
   detectLanguage : function (phrase) {
     // write your code here, but don't add any additional 
     // parameters to the the function     
   }
         
};


$(document).ready(function(){
    
    
    
    $("button").on("click", function(){
        
        var parola = $("input").val();
        
        var italiano = ParlaModel.getLanguageScore(parola,"Italiano");
        var inglese = ParlaModel.getLanguageScore(parola,"Inglese");
        var spagnolo = ParlaModel.getLanguageScore(parola,"Spagnolo");
        alert(italiano);
        
        if((italiano > inglese) && (italiano > spagnolo)){
            $(".lang-name").text("Italiano");
        }
        if((inglese > italiano) && (inglese > spagnolo)){
            $(".lang-name").text("Inglese");
        }
        if((spagnolo > italiano) && (spagnolo > inglese)){
            $(".lang-name").text("Spagnolo");
        }
                                                  
    });
    
    
    
        
  
});