export class DKPRecord {  
  public player: any;  
  public class: any;  
  public dkp: any;  
  public previousDKP: any;  
  public lifetimeGained: any;  
  public lifetimeSpent: any;     
}
//player,itemName,itemNumber,zone,boss,date,cost,
export class LootRecord {  
  public player: any;  
  public itemName: any;  
  public itemNumber: any;  
  public zone: any;  
  public boss: any;  
  public date: any;   
  public cost: any;       
}
export class DKPHistoryRecord {  
  public players: string;  
  public dkp: any;  
  public dateEpoch: any;  
  public reason: any;      
}
export class MonDKPUpload {  
  public timestamp : number
  public dkpData : Array<DKPRecord> = new Array()
  public lootData : Array<LootRecord> = new Array()
  public dkpHistoryData : Array<DKPHistoryRecord> = new Array()
}