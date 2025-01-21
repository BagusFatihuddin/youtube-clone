import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../Data";
import moment from "moment";

const Feed = ({ category }) => {
    const [data, setData] = useState([]);
    // variabel yang digunakan buat menyimpan data api

    useEffect(() => {
        fetchData();
    }, [category]);
    //Saat category berubah, ini memicu useEffect dalam komponen Feed.
    // React menjalankan kode di dalam useEffect setiap kali nilai dalam array dependensi [category] berubah.
    // Apa yang terjadi ketika category berubah?
    // useEffect dipanggil.
    // Fungsi fetchData dijalankan untuk mengambil data baru dari API.

    const fetchData = async () => {
        //fungsi ini bisa menunggu proses yang memakan waktu (seperti fetch) tanpa menghentikan alur eksekusi kode lainnya.

        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        // menyimpan url buat ngambil data

        const response = await fetch(videoList_url);
        //fetch(videoList_url):
        // Meminta data dari server di alamat videoList_url.
        // response adalah hasil respons dari server.
        // roses ini memakan waktu karena harus mengakses jaringan.
        // await memastikan bahwa kode berikutnya akan menunggu hingga data dari server diterima.

        const data = await response.json();
        //ngubah data yang diterima menjadi format json biar gampang di proses oleh js

        setData(data.items); // nyimpan data api ke varibael data
    };

    return (
        <div className="feed">
            {data.map((item, index) => {
                // item = isi, index =  urutan
                // map () Bayangkan API mengirimkan kotak besar berisi 50 kartu video. .map() seperti petugas yang mengambil setiap kartu, membacanya, dan meletakkannya di layar pengguna.
                return (
                    <Link
                        to={`video/${item.snippet.categoryId}/${item.id}`}
                        className="card"
                        key={index}
                        // React butuh key untuk:
                        // Melacak elemen:
                        // Ketika data berubah, React bisa tahu elemen mana yang perlu diperbarui atau tetap sama.
                        // Efisiensi:
                        // React bisa menghindari render ulang seluruh list jika elemen hanya bergeser atau berubah sedikit.
                    >
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>
                            {value_converter(item.statistics.viewCount)} views
                            &bull;{" "}
                            {moment(
                                item.snippet.publishedAt || new Date()
                            ).fromNow()}
                        </p>
                    </Link>
                );
            })}
        </div>
    );
};

export default Feed;

// const fetchData = async () => {
//     const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
//     await fetch(videoList_url)
//         .then((response) => response.json())
//         .then((data) => setData(data.items));
// };
