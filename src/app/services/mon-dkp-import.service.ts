import { Injectable } from '@angular/core';
import { DKPRecord,LootRecord,DKPHistoryRecord, MonDKPUpload } from '../../app/services/mon-dkp.models';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {map,first } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MonDkpImportService {
  private dkpsRef: AngularFireList<any>;
  private lootsRef: AngularFireList<any>;
  private historysRef: AngularFireList<any>;
  private uploadRef: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {}
  importToFirebase(data : MonDKPUpload){
    this.addUploadToFirebase(data);
  }
  private addUploadToFirebase(upload: MonDKPUpload) {
    this.uploadRef = this.db.list("dkp-uploads/");
    let userId = upload.timestamp.toString();
    this.uploadRef.update(userId,upload);
  }

  private addDKPRecords(dkps: DKPRecord[],id : number) {
    this.dkpsRef = this.db.list("dkp-uploads/"+id+"/dkpData");
    dkps.forEach(dkp => {
      this.dkpsRef.push(dkp)
    });
  }
   // Error management

   private addHistoryRecords(dkps: DKPHistoryRecord[],id : number) {
    this.historysRef = this.db.list("dkp-uploads/"+id+"/dkpHistoryData");
    dkps.forEach(dkp => {
      this.historysRef.push(dkp)
    });
  }

  private addLootRecords(dkps: LootRecord[],id : number) {
    this.lootsRef = this.db.list("dkp-uploads/"+id+"/lootData");
    dkps.forEach(dkp => {
      this.lootsRef.push(dkp)
    });
  }
   // Error management
   private errorMgmt(error) {
    console.log(error)
  }
  public getDkpRecords() : Observable<DKPRecord[]>{
    var upload = this.db.list<DKPRecord>('dkp-uploads', ref => ref.orderByKey().limitToLast(1)).valueChanges()
    //orderByKey sorts in ascending order. Therefore we use limittoLast 1 and take the first element afterwards. 
    return upload.pipe<any>(
      map(x=>x[0]["dkpData"])
    );
  }
  public getHistoryRecords(){

  }
  public getLootRecords(){

  }
  
}
