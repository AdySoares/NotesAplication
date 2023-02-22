import path from 'path';
import multer from 'multer';
import crypto from 'crypto'

const TMP_FOLDER = path.resolve(__dirname, '..', '..', 'tmp');

const MULTER = {  
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(request, file, callback) {
      const fileHashName = crypto.randomBytes(10).toString('hex')
      const fileName = `${fileHashName}-${file.originalname}`

      return callback(null, fileName)
    }
  })
}

export {
  TMP_FOLDER,
  MULTER
}