import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

const App = () => {
    const [sidebar, setSidebar] = useState(true);

    return (
        <div>
            <Navbar setSidebar={setSidebar} /> {/* memanggil navbar */}
            <Routes>
                <Route path="/" element={<Home sidebar={sidebar} />} />{" "}
                {/* nilaisidebar diteruskan ke Home */}
                <Route path="/Video/:categoryId/:videoId" element={<Video />} />
            </Routes>
        </div>
    );
};

export default App;

// const [sidebar, setSidebar] = useState(true); // useState = hook, awal side bar true
// Mengelola state lokal (nilai yang dapat berubah) dalam komponen.
// Memberi tahu React untuk merender ulang (re-render) komponen jika nilai state berubah.

// sidebar: Nilai sekarang dari state.
// setSidebar: Fungsi untuk memperbarui state.
// true: Nilai awal state (dalam kasusmu, true).

// Variabel state: Ini adalah nilai yang disimpan dalam state dan dapat digunakan di dalam komponen. Dalam contoh ini, variabelnya adalah sidebar.
// Fungsi untuk memperbarui state: Fungsi ini digunakan untuk mengubah nilai state. Fungsi ini adalah setSidebar dalam kasus ini.

// sidebar adalah state yang menyimpan nilai. Nilainya diinisialisasi dengan true. Ini berarti bahwa pada awalnya sidebar dianggap besar (true).
// setSidebar adalah fungsi yang digunakan untuk mengubah nilai dari sidebar. Fungsi ini akan mengubah nilai state yang disimpan dalam sidebar.
// Ketika pertama kali komponen dirender, sidebar akan memiliki nilai true karena itu adalah nilai awal yang diberikan ke useState(true). Artinya, pada awalnya sidebar akan dalam keadaan besar.
