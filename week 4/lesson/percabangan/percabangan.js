
// if else
IPK = 3.9

if (IPK >=3.5 && IPK <= 4) {
    console.log("cumlaude")
    // nested percabangan
    if(IPK >= 3.9){
        console.log("Free Piring Cantik")
    }
} else if (IPK >=3 && IPK < 3.5) {
    console.log("baik")
} else if (IPK >=2.5 && IPK < 3) {
    console.log("cukup")
} else {
    console.log("Perbaikan")
}

// switch case
let model = 'metsu';
switch(model) {
    case 'mercedes': console.log("mercy");
    break
    case 'bmw': console.log("i8")
    break
    case 'volvo': console.log("Truck")
    break
    default: console.log("Undifined")
}

// continue
for (let i = 0; i < 10; i++) {
 
    
    if (i == 10) {
        break
    }
    if (i == 6) {
        continue
    }

    console.log(i);
  
}
