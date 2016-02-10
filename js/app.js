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
