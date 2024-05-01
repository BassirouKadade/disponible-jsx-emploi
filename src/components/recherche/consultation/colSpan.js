export  function colSpanTd(debut ,fin) {
    switch(debut){
        case 8:
         switch (fin) {
           case 10:
             return 2;
           case 11:
             return 3;
           case 12:
             return 4;
           case 13:
             return 5;
           case 14:
             return 6;
           case 15:
             return 7;
           case 16:
             return 8;
           case 17:
             return 9;
           case 18:
             return 10;
           default:
             return null;
         }
         case 9:
           switch (fin) {
             case 10:
               return 1;
             case 11:
               return 2;
             case 12:
               return 3;

             case 13:
               return 4;
             case 14:
               return 5;
             case 15:
               return 6;
             case 16:
               return 7;
             case 17:
               return 8;
             case 18:
               return 9;
             default:
               return null;
           }
           case 10:
           switch (fin) {
             case 11:
               return 1;
             case 12:
               return 2;
             case 13:
               return 3;
             case 14:
               return 4;
             case 15:
               return 5;
             case 16:
               return 6;
             case 17:
               return 7;
             case 18:
               return 8;
             default:
               return null;
           }
           case 11:
             switch (fin) {
               case 12:
                 return 1;
               case 13:
                 return 2;
               case 14:
                 return 3;
               case 15:
                 return 4;
               case 16:
                 return 5;
               case 17:
                 return 6;
               case 18:
                 return 7;
               default:
                 return null;
             }
             case 12:
               switch (fin) {
                 case 13:
                   return 1;
                 case 14:
                   return 2;
                 case 15:
                   return 3;
                 case 16:
                   return 4;
                 case 17:
                   return 5;
                 case 18:
                   return 6;
                 default:
                   return null;
               }
               case 13:
                 switch (fin) {
                   case 14:
                     return 1;
                   case 15:
                     return 2;
                   case 16:
                     return 3;
                   case 17:
                     return 4;
                   case 18:
                     return 5;
                   default:
                     return null;
                 }
                 case 14:
                   switch (fin) {
                     
                     case 15:
                       return 1;
                     case 16:
                       return 2;
                     case 17:
                       return 3;
                     case 18:
                       return 4;
                     default:
                       return null;
                   }
                   case 15:
                   switch (fin) {
                   
                     case 16:
                       return 1;
                     case 17:
                       return 2;
                     case 18:
                       return 3;
                     default:
                       return null;
                   }
                   case 16:
                     switch (fin) {
                     
                       case 17:
                         return 1;
                       case 18:
                         return 2;
                       default:
                         return null;
                     }
                     case 17:
                       switch (fin) {
                         case 18:
                           return 1;
                         default:
                           return null;
                       }
                   
       default:
           return ;
    }
 }
 