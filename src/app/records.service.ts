import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Kumara perera",'Ew345',"kmra@erg.com"]
  info2: string[] = ["james silva",'Ew346',"js@erg.com"]
  info3: string[] = ["mark taylor",'Ew347',"mmktaylor@erg.com"]

  getinfo1(): string[]{
    return this.info1
  }
  getinfo2(): string[]{
    return this.info2
  }
  getinfo3(): string[]{
    return this.info3
  }
  constructor() { }
}
