# tokopedia_play-rido
Tokopedia play midterm and final

## Database Structure
Collection yang dibuat hanya 1 yaitu collection video, structure collection video dapat dilihat dibawah:
```bash
{
        url_image:{
            required:true,
            type:String
        },
        products:[
            {
                link_product:{
                    required:true,
                    type:String
                },
                price:{
                    required:true,
                    type:String
                },
                title:{
                    required:true,
                    type:String
                }
            }],
        comments:[{
            username:{type:String},
            comment:{type:String},
            timestamp:{type:Date}
        }]
    }
```

## API Documentation
Dokumentasi Postman : https://documenter.getpostman.com/view/17698672/2s9XxsUGJ4

## How To Run
Untuk menjalankan app ini dapat melakukan langkah langkah sebagai berikut:

**1. Import Data database dari file json yang berada pada folder 'database_backup'**

**2. Clone repo:**
```bash
git clone 
```

**3. Install depedencies yang diperlukan oleh aplikasi:**
```bash
npm install
```

**4. Buat suatu file .env yang berisi :**
|       Variable      |            Value           |
|:-------------------:|:--------------------------:|
|       DATABASE_URL  |        Url ke database     |


**5. Jalankan aplikasi :**
```bash
npm start
```

