import { Injectable } from '@angular/core';
import { MonDKPUpload, DKPRecord, DKPHistoryRecord, LootRecord } from 'src/app/services/mon-dkp.models';
@Injectable({
  providedIn: 'root'
})
export class MonDkpConverterService {

  constructor() { }
  getMonDKPData(csvString: string | ArrayBuffer) {  
    try{
      this.validateInput((<string>csvString));
      return this.getMonDKPDataFromString(csvString);
    }
    catch(e){
      console.log(e);
      throw e;
    }
  }
  validateInput(csvString: string) {
    var validateStrings = ["DKPHistory","LootHistory","Listed As:"];

    var matchCount = 0;
    for(var i = 0;i<validateStrings.length;i++){
      var matchString = validateStrings[i];
      if(csvString.indexOf(matchString) > -1){
        matchCount = matchCount + 1;
      }
    }
    if(matchCount != validateStrings.length){
      throw new Error("The input is not valid");
    }
  }
  private getMonDKPDataFromString(monDkpString: string | ArrayBuffer){
    let monDKPData: MonDKPUpload = new MonDKPUpload();  
    monDKPData.timestamp = Date.now();
    let csvRecordsArray = (<string>monDkpString).split(/\r\n|\n/); 
    let columnRow = null;
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let currentRow = (<string>csvRecordsArray[i]);
      
      if(currentRow.startsWith("Listed As:")){
        columnRow = currentRow;
        continue;
      }  
      if(currentRow.startsWith("DKPHistory")){
        var columnCount = this.getColumnCountFromRow(columnRow);
        var indexOfEq = currentRow.indexOf('=');
        var historyRowString = currentRow.substring(indexOfEq+1).trim();
        monDKPData.dkpHistoryData = this.getDkpHistoryArr(historyRowString);
      }
      if(currentRow.startsWith("LootHistory")){
        var columnCount = this.getColumnCountFromRow(columnRow);
        var indexOfEq = currentRow.indexOf('=');
        var lootRowString = currentRow.substring(indexOfEq+1).trim();
        monDKPData.lootData = this.getDkpLootArr(lootRowString);
      }
      else{
        let currentRecord = currentRow.split(',');  
          monDKPData.dkpData.push(this.mapToDKPRecord(currentRecord))
      }
    }  
    return monDKPData;  
  }
  private getColumnCountFromRow(columnRow: any) {
    columnRow = columnRow.replace(",...","");
    var columnRowSplit = columnRow.split(',');
    return (columnRowSplit.length -1);
  }
  private getDkpLootArr(lootRowString : string){
    var lootArray = new Array();
    //Consider using a parameter. n columns - 1
    var reg = /(?:[^,]+\,){6}[^,]+/g;
    var match;
    while ((match = reg.exec(lootRowString)) != null) {
        var matchSplit = match[0].split(",");
        var lootRecord = this.mapToDKPLootRecord(matchSplit);
        lootArray.push(lootRecord);
    }
    return lootArray;
  }
  private getDkpHistoryArr(historyRowString : string){
    var historyArray = new Array();
    //Consider using a parameter. n columns - 1
    var reg = /(?:[^,]+\,){3}[^,]+/g;
    var match;
    while ((match = reg.exec(historyRowString)) != null) {
        var matchSplit = match[0].split(",");
        var dkpHistoryRecord = this.mapToDKPHistoryRecord(matchSplit);
        historyArray.push(dkpHistoryRecord);
    }
    return historyArray;
  }
 
  //player,itemName,itemNumber,zone,boss,date,cost,
  private mapToDKPLootRecord(lootDkpRecordStringSplit : string[]){
    let lootCsvRecord: LootRecord = new LootRecord();  
    lootCsvRecord.player = lootDkpRecordStringSplit[0].trim();  
    lootCsvRecord.itemName = lootDkpRecordStringSplit[1].trim();  
    lootCsvRecord.itemNumber = lootDkpRecordStringSplit[2].trim();  
    lootCsvRecord.zone = lootDkpRecordStringSplit[3].trim(); 
    lootCsvRecord.boss = lootDkpRecordStringSplit[4].trim(); 
    lootCsvRecord.date = lootDkpRecordStringSplit[5].trim(); 
    lootCsvRecord.cost = lootDkpRecordStringSplit[6].trim(); 
    return lootCsvRecord; 
  }
  private mapToDKPHistoryRecord(historyDkpRecordStringSplit : string[]){
    let dkpCsvRecord: DKPHistoryRecord = new DKPHistoryRecord();  
    dkpCsvRecord.players = historyDkpRecordStringSplit[0].trim();  
    dkpCsvRecord.dkp = historyDkpRecordStringSplit[1].trim();  
    dkpCsvRecord.dateEpoch = historyDkpRecordStringSplit[2].trim();  
    dkpCsvRecord.reason = historyDkpRecordStringSplit[3].trim(); 
    return dkpCsvRecord; 
  }
  private mapToDKPRecord(dkpCsvRecordSplit : string[]){
    let dkpCsvRecord: DKPRecord = new DKPRecord();  
    dkpCsvRecord.player = dkpCsvRecordSplit[0].trim();  
    dkpCsvRecord.class = dkpCsvRecordSplit[1].trim().toLowerCase(); 
    dkpCsvRecord.dkp = dkpCsvRecordSplit[2].trim();  
    dkpCsvRecord.previousDKP = dkpCsvRecordSplit[3].trim();  
    dkpCsvRecord.lifetimeGained = dkpCsvRecordSplit[4].trim();  
    dkpCsvRecord.lifetimeSpent = dkpCsvRecordSplit[5].trim();  
    return dkpCsvRecord;
  } 
}
