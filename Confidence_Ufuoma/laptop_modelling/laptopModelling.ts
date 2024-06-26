export class Laptop{
    /* keyboard : KeyBoard[] = [] ;  //a laptop can have more than one keyboard       
    nic : NetworkInterfaceCard;     
    screen : Display;
    hardDisk : HardDisk;
    powerState: boolean = false;
    bitKind : BitKind;

    constructor(
        bit: BitKind, 
        display: Display, 
        nic : NetworkInterfaceCard,
        hd : HardDisk,
        keyBoards: KeyBoard[]
    ){
        this.powerState = false;
        this.bitKind = bit;
        this.screen = display;
        this.nic = nic;
        this.hardDisk = hd;
        this.keyboard = keyBoards;

    */

    powerState:boolean;
    constructor(
        public bit: BitKind, 
        public display: Display, 
        public nic : NetworkInterfaceCard,
        public hd : HardDisk,
        public keyBoards: KeyBoard[],
        public operatingSystem : OperatingSystem
        
    ){
        this.powerState = false;
    }

    shutDown(){
        this.powerState = false;
    }

    switchOn(){
        this.powerState = true;
    }
     

    update(newBit: BitKind, newOsVersion: number, newHdSize : number){
        console.log("Downloading update..........");

        this.bit = newBit;
        this.operatingSystem.osVersion = newOsVersion;
        this.hd.size = newHdSize;

        this.performSoftwareUpdate();
        this.performHardwareUpgrade();
        this.performConfigurationChanges();
        this.testAndValidateUpdates();
        console.log("Laptop updated successfully.");
    }

    private performSoftwareUpdate(){
        console.log("Performing software updates.....");
    }
    private performHardwareUpgrade(){
        console.log("Performing hardware upgrade .....");
    }
    private performConfigurationChanges(){
        console.log("Performing configuration changes.....");
    }
    private testAndValidateUpdates(){
        console.timeLog("Testing and validating updates ...");
    }

    displayLaptopSpecifications(){
        console.log(`Bit size : ${this.bit} \nDisplay Type : ${this.display.type} \nDisplay Size : ${this.display.size} \nNetwork Interface Card : ${this.nic.name} \nHard Disk Type : ${this.hd.type} \nHard Disk Size : ${this.hd.size} \nOperating System : ${this.operatingSystem.kind} \nOperating System Version : ${this.operatingSystem.version}\n `);
        this.keyBoards.forEach((keyboard, index) => {
            console.log(`Keyboard ${index + 1}: \n\t Type : ${keyboard.kind} \n\t Layout : ${keyboard.layout}`);
        })

       
    }
}

export class KeyBoard{
    kind: KeyBoardKind; //kind: "in-built" | "external";
    layout : KeyBoardLayout;  // layout : "Qwerty" | "Qwertz" | "Azerty";  

    set keyboardType(kind : KeyBoardKind){
        this.kind = kind;
    }

    set keyboardLayout(layout : KeyBoardLayout){
        this.layout = layout
    }
}


export class NetworkInterfaceCard{
    //name: string;
    constructor(public readonly name : string){  //the public is saying the name is an instance property

    }
}

export class Display{
    size : number;
    type: DisplayType;

    set displaySize(val: number){   //Special setter
        this.size = val;
    }
    setDisplayType(type: DisplayType){  //Normal method
        this.type = type;
    }
}

export class HardDisk{
    type: HardDiskType;
    size: number;

    set hardDiskSize(val: number){
        this.size = val;
    }

    set hardDiskType(type:HardDiskType){
        this.type = type;
    }
}

export class OperatingSystem{
    kind : OsKind;
    version : number;

    set osKind(type : OsKind){
        this.kind = type;
    }

    set osVersion(versionNo : number){
        this.version = versionNo;
    }
}


//Creating a custom keyboard type
type KeyBoardKind = "in-built" | "external";

//Custom type for keyboard layout
type KeyBoardLayout = "Qwerty" | "Qwertz" | "Azerty";

//Custom type for Operating system
type OsKind = "Linux" | "Mac" | "Windows";

type BitKind = "x64" | "x32" | "x86";

type DisplayType = "amoled" | "lcd" | "oled";

type HardDiskType = "ssd"  | "hdd"


