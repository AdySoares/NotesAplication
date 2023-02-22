import path from 'path';
import fs from 'fs';
import { TMP_FOLDER} from '../config/uploads'

export class DiskStorage{
  async deleteFile(file: any){

    const filePath = path.resolve(TMP_FOLDER, file)
    try {
      await fs.promises.stat(filePath)
    } catch (error) {
      return
    }
    await fs.promises.unlink(filePath)
  
  }
}