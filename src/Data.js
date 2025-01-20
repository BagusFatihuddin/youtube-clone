export const API_KEY = "AIzaSyBWCFguxMANbDR8tkicf653H43_OovmQLE";

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    } else {
        return value;
    }
};

// export: agar bisa di akses di file lain
// return agar fungsi berhenti berjalan saat menemukan kondisi yangs esuai.
