import { Injectable } from '@nestjs/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as uuid from 'uuid-v4';

@Injectable()
export class AppService {
  private readonly collectionSubject = new BehaviorSubject<Record<string, Partial<{ id: number; name: string }>>>({});
  private readonly collection$ = this.collectionSubject.asObservable();

  getCollection = (): Observable<Partial<{ id: number; name: string }>[]> => this.collection$.pipe(map(col => Object.values(col)));

  generateNewItem = () => {
    const uniqueName = uuid();

    this.collectionSubject.next({ ...this.collectionSubject.getValue(), ...{ [uniqueName]: { id: Math.random(), name: uniqueName } } });
  };
}
