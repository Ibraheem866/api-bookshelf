# Bookshelf API

REST API untuk mengelola koleksi buku menggunakan Hapi.js Framework.

## Features

- ✅ Add new books
- ✅ Get all books with filtering options
- ✅ Get book details by ID
- ✅ Update book information
- ✅ Delete books
- ✅ Query parameters for filtering (name, reading status, finished status)
- ✅ Input validation and error handling
- ✅ ESLint integration for code consistency

## Instalasi

```bash
npm install
npm start
```

Server akan berjalan di `http://localhost:9000`

## API Endpoints

### 1. Menambah Buku

**POST** `/books`

**Request Body:**
```json
{
    "name": "Belajar Node.js",
    "year": 2023,
    "author": "John Doe",
    "summary": "Buku tentang pembelajaran Node.js dari dasar",
    "publisher": "Dicoding Indonesia",
    "pageCount": 200,
    "readPage": 50,
    "reading": true
}
```

**Response Success (201):**
```json
{
    "status": "success",
    "message": "Buku berhasil ditambahkan",
    "data": {
        "bookId": "1L7ZtDUFeGs7VlEt"
    }
}
```

**Response Error - Nama kosong (400):**
```json
{
"status": "fail",
"message": "Gagal menambahkan buku. Mohon isi nama buku"
}
```

**Response Error - readPage > pageCount (400):**
```json
{
"status": "fail",
"message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
}
```

---

### 2. Menampilkan Semua Buku

**GET** `/books`

**Query Parameters (Opsional):**

- `name` - Filter berdasarkan nama buku (case insensitive)
- `reading` - Filter berdasarkan status membaca (0 atau 1)
- `finished` - Filter berdasarkan status selesai (0 atau 1)

**Contoh Request:**
```
GET /books
GET /books?name=dicoding
GET /books?reading=1
GET /books?finished=0
GET /books?name=node&reading=1
```

**Response Success (200):**
```json
{
    "status": "success",
    "data": {
        "books": [
            {
            "id": "Qbax5Oy7L8WKf74l",
            "name": "Belajar Node.js",
            "publisher": "Dicoding Indonesia"
            },
            {
            "id": "1L7ZtDUFeGs7VlEt",
            "name": "Belajar React",
            "publisher": "Dicoding Indonesia"
            }
        ]
    }
}
```

**Response Kosong (200):**
```json
{
    "status": "success",
    "data": {
        "books": []
    }
}
```

---

### 3. Menampilkan Detail Buku

**GET** `/books/{bookId}`

**Contoh Request:**
```
GET /books/Qbax5Oy7L8WKf74l
```

**Response Success (200):**
```json
{
    "status": "success",
    "data": {
        "book": {
            "id": "Qbax5Oy7L8WKf74l",
            "name": "Belajar Node.js",
            "year": 2023,
            "author": "John Doe",
            "summary": "Buku tentang pembelajaran Node.js dari dasar",
            "publisher": "Dicoding Indonesia",
            "pageCount": 200,
            "readPage": 50,
            "finished": false,
            "reading": true,
            "insertedAt": "2021-03-04T09:11:44.598Z",
            "updatedAt": "2021-03-04T09:11:44.598Z"
        }
    }
}
```

**Response Error - Buku tidak ditemukan (404):**
```json
{
    "status": "fail",
    "message": "Buku tidak ditemukan"
}
```

---

### 4. Mengubah Data Buku

**PUT** `/books/{bookId}`

**Request Body:**
```json
{
    "name": "Belajar Node.js Lanjutan",
    "year": 2024,
    "author": "Jane Doe",
    "summary": "Buku lanjutan tentang Node.js",
    "publisher": "Dicoding Indonesia",
    "pageCount": 300,
    "readPage": 100,
    "reading": true
}
```

**Response Success (200):**
```json
{
    "status": "success",
    "message": "Buku berhasil diperbarui"
}
```

**Response Error - Nama kosong (400):**
```json
{
    "status": "fail",
    "message": "Gagal memperbarui buku. Mohon isi nama buku"
}
```

**Response Error - readPage > pageCount (400):**
```json
{
    "status": "fail",
    "message": "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
}
```

**Response Error - ID tidak ditemukan (404):**
```json
{
    "status": "fail",
    "message": "Gagal memperbarui buku. Id tidak ditemukan"
}
```

---

### 5. Menghapus Buku

**DELETE** `/books/{bookId}`

**Contoh Request:**
```
DELETE /books/Qbax5Oy7L8WKf74l
```

**Response Success (200):**
```json
{
    "status": "success",
    "message": "Buku berhasil dihapus"
}
```

**Response Error - ID tidak ditemukan (404):**
```json
{
    "status": "fail",
    "message": "Buku gagal dihapus. Id tidak ditemukan"
}
```

## Catatan Penting

- Properti `finished` dihitung otomatis berdasarkan `pageCount === readPage`
- Properti `id`, `insertedAt`, dan `updatedAt` dikelola otomatis oleh server
- Data disimpan dalam memori (akan hilang saat server restart)
- Server berjalan di port 9000

## Validation Rules

- `name` is required
- `readPage` cannot be greater than `pageCount`
- `finished` is automatically calculated based on `pageCount === readPage`

## Code Quality

Run ESLint to check code quality:
```bash
npm run lint
```

Fix ESLint issues automatically:
```bash
npm run lint:fix
```

## Port Configuration

The API runs on port 9000 by default. Make sure this port is available on your system.
