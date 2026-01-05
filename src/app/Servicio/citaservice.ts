import { Injectable } from '@angular/core';
import { citas } from 'src/Modelo/Clase Citas';
import {Capacitor} from '@capacitor/core';
import {CapacitorSQLite, SQLiteConnection, SQLiteDBConnection}from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root',
})

export class Citaservice {
  sqlite:SQLiteConnection = new SQLiteConnection(CapacitorSQLite)
  db!: SQLiteDBConnection;

  plataforma:string = ""
  
  TABLE_NAME:string       = "lista_citas" ;
  COL_AUTOR:string        = "Autor";
  COL_FRASE:string        = "Frase";
  DB_NAME: string         = "lista_citas";
  DB_ENCRIPTADA: boolean  = false;
  DB_MODE: string         = "no-encryption";
  DB_VERSION: number      = 1;
  DB_READ_ONLY: boolean   = false;
  DB_SQL_TABLAS: string   = `
    CREATE TABLE IF NOT EXISTS ${this.TABLE_NAME}(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ${this.COL_AUTOR} TEXT NOT NULL,
      ${this.COL_FRASE} TEXT NOT NULL
    );
  `;  
   

  constructor (){}

  private async _iniciarPluginWeb(): Promise<void> {    
    await customElements.whenDefined('jeep-sqlite')
    const jeepSqliteEl = document.querySelector("jeep-sqlite")
    if( jeepSqliteEl != null ) {      
      await this.sqlite.initWebStore()            
  }
  }
  
  async iniciarPlugin() {    
    this.plataforma = Capacitor.getPlatform()
    if(this.plataforma == "web") {
      await this._iniciarPluginWeb()
    }
    await this.abrirConexion()
    await this.db.execute(this.DB_SQL_TABLAS)
    
    const citas = await this.getCitas();
    if (citas.length === 0) {
      await this.agregarCitas({
        Autor:"Carlos Ruiz Zafón", 
        Frase:"No puedo morir aún doctor. Todavía no. Tengo cosas que hacer. Después de todo, tendré una vida entera en la que morir"
      });
      await this.agregarCitas({
        Autor:"Henry James", 
        Frase:"Llamo a la gente 'rica' cuando son capaces de satisfacer las necesidades de su imaginación"
      });
    }
  }

  async abrirConexion() {                    
    const ret = await this.sqlite.checkConnectionsConsistency() 
    const isConn = (await this.sqlite.isConnection(this.DB_NAME, this.DB_READ_ONLY)).result
    if(ret.result && isConn) {
      this.db = await this.sqlite.retrieveConnection(this.DB_NAME, this.DB_READ_ONLY)      
    } else {
      this.db = await this.sqlite.createConnection(
        this.DB_NAME,
        this.DB_ENCRIPTADA,
        this.DB_MODE,
        this.DB_VERSION,
        this.DB_READ_ONLY
      )
    }
    await this.db.open()

  }
  async getCitas():Promise<citas[]> {    
    const sql = `SELECT * FROM ${this.TABLE_NAME}`      
    const resultado = await this.db.query(sql)
    return resultado?.values ?? []
  }

  async agregarCitas(c:citas):Promise<void> {    
    const sql = `INSERT INTO ${this.TABLE_NAME}(${this.COL_AUTOR}, ${this.COL_FRASE}) VALUES(?, ?)`
    await this.db.run(sql, [c.Autor, c.Frase])    
  }

  async getCitasAleatorias() : Promise <citas | null> {
    const todasLasCitas = await this.getCitas();
      if (todasLasCitas.length === 0) {
      return null;
    }  
    const indiceAleatorio = Math.floor(Math.random() * todasLasCitas.length);
    return todasLasCitas[indiceAleatorio];
  }
  
  async eliminarCitas(id : number): Promise<void> {
  const sql = `DELETE FROM ${this.TABLE_NAME} WHERE id = ?`;
  await this.db.run(sql, [id]);
  }

}
