export const id = {
    // common actions and states
    common: {
        cancel: "Batal",
        loading: "Memuat...",
        error: "Kesalahan",
        success: "Sukses",
        pending: "Tertunda",
        back: "Kembali",
        unselectAll: "Batalkan Pilihan Semua",
        selectAll: "Pilih Semua",
    },

    // authentication and access related
    noAccess: {
        title: "Bergabunglah dengan daftar putih Dione",
        description:
            "Dione sedang dalam pembangunan dan hanya sejumlah pengguna yang terbatas yang dapat mengaksesnya, bergabunglah dengan daftar putih kami sekarang untuk mendapatkan akses ke versi aplikasi kami di masa mendatang.",
        join: "Bergabung",
        logout: "Keluar",
    },

    // first time user experience
    firstTime: {
        welcome: {
            title: "Selamat datang di",
            subtitle:
                "Terima kasih telah bergabung dengan kami di awal perjalanan ini. Masuk ke akun Anda untuk memulai.",
            login: "Masuk",
            copyLink: "Salin Tautan",
            skipLogin: "Lanjutkan tanpa masuk",
        },
        loggingIn: {
            title: "Masuk...",
            authError: "Tidak dapat mengotentikasi?",
            goBack: "Kembali",
        },
        languageSelector: {
            title: "Pilih bahasa Anda",
        },
        ready: {
            title: "Anda siap!",
            subtitle: "Kami senang Anda ada di sini",
            finish: "Selesai",
        },
        clipboard: {
            success:
                "Berhasil disalin ke clipboard, sekarang tempelkan di peramban Anda!",
        },
        selectPath: {
            title: "Pilih jalur instalasi",
            button: "Pilih jalur",
            success: "Berikutnya",
        },
    },

    // error handling
    error: {
        title: "Terjadi kesalahan tak terduga",
        description:
            "Kami mendeteksi kesalahan tak terduga dalam aplikasi, kami mohon maaf atas ketidaknyamanannya.",
        return: "Kembali",
        report: {
            toTeam: "Laporkan ke tim",
            sending: "Mengirim laporan...",
            success: "Laporan terkirim!",
            failed: "Gagal mengirim laporan",
        },
    },

    // account related
    account: {
        title: "Akun",
        logout: "Keluar",
        stats: {
            timeSpent: {
                title: "Waktu yang dihabiskan",
                subtitle: "dalam 7 hari terakhir",
            },
            sessions: {
                title: "Sesi",
                subtitle: "dalam 7 hari terakhir",
            },
            shared: {
                title: "Dibagikan",
                subtitle: "dalam 7 hari terakhir",
            },
            streak: {
                title: "Rentetan",
                subtitle: "hari berturut-turut",
                days: "hari",
            },
        },
    },

    // toast notifications
    toast: {
        close: "Tutup",
        install: {
            downloading: "Mengunduh %s...",
            starting: "Memulai %s...",
            uninstalling: "Menghapus instalasi %s...",
            reconnecting: "Menghubungkan kembali %s...",
            retrying: "Mencoba menginstal %s lagi...",
            success: {
                stopped: "%s berhasil dihentikan.",
                uninstalled: "%s berhasil dihapus instalasinya.",
                logsCopied: "Log berhasil disalin ke clipboard.",
                depsInstalled: "Dependensi berhasil diinstal.",
                shared: "Tautan unduhan disalin ke clipboard!",
            },
            error: {
                download: "Kesalahan saat memulai unduhan: %s",
                start: "Kesalahan saat memulai %s: %s",
                stop: "Kesalahan saat menghentikan %s: %s",
                uninstall: "Kesalahan saat menghapus instalasi %s: %s",
                serverRunning: "Server sudah berjalan.",
                tooManyApps:
                    "Perlambat! Anda sudah menjalankan 6 aplikasi secara bersamaan.",
            },
        },
    },

    // titlebar component
    titlebar: {
        closing: {
            title: "Menghentikan aplikasi...",
            description:
                "Dione akan ditutup secara otomatis setelah menutup semua aplikasi yang terbuka.",
        },
    },

    // sidebar component
    sidebar: {
        tagline: "Jelajahi, Instal, Berinovasi — dalam 1 Klik.",
        activeApps: "Aplikasi Aktif",
        update: {
            title: "Pembaruan Tersedia",
            description:
                "Versi Dione baru tersedia, silakan mulai ulang aplikasi untuk memperbarui.",
            tooltip:
                "Pembaruan baru tersedia, silakan mulai ulang Dione untuk memperbarui.",
        },
        tooltips: {
            library: "Perpustakaan",
            settings: "Pengaturan",
            account: "Akun",
            logout: "Keluar",
            login: "Masuk",
            capture: "Tangkap",
        },
    },

    // home page
    home: {
        featured: "Unggulan",
        explore: "Jelajahi",
    },

    // settings page
    settings: {
        applications: {
            title: "Aplikasi",
            installationDirectory: {
                label: "Direktori Instalasi",
                description: "Pilih tempat aplikasi baru akan diinstal secara default",
            },
            binDirectory: {
                label: "Direktori Bin",
                description:
                    "Pilih tempat biner aplikasi akan disimpan agar mudah diakses",
            },
            cleanUninstall: {
                label: "Hapus Instalasi Bersih",
                description:
                    "Hapus semua dependensi terkait saat menghapus instalasi aplikasi",
            },
            autoOpenAfterInstall: {
                label: "Buka Otomatis Setelah Instalasi",
                description:
                    "Buka aplikasi secara otomatis untuk pertama kalinya setelah instalasi",
            },
            deleteCache: {
                label: "Hapus Cache",
                description: "Hapus semua data cache dari aplikasi",
                button: "Hapus Cache",
                deleting: "Menghapus...",
                deleted: "Dihapus",
                error: "Kesalahan",
            },
        },
        interface: {
            title: "Antarmuka",
            displayLanguage: {
                label: "Bahasa Tampilan",
                description: "Pilih bahasa antarmuka pilihan Anda",
            },
            helpTranslate:
                "🤔 Tidak melihat bahasa Anda? Bantu kami menambahkan lebih banyak!",
            compactView: {
                label: "Tampilan Ringkas",
                description:
                    "Gunakan tata letak yang lebih padat untuk memuat lebih banyak konten di layar",
            },
        },
        notifications: {
            title: "Notifikasi",
            systemNotifications: {
                label: "Notifikasi Sistem",
                description: "Tampilkan notifikasi desktop untuk peristiwa penting",
            },
            installationAlerts: {
                label: "Peringatan Instalasi",
                description: "Dapatkan notifikasi saat instalasi aplikasi selesai",
            },
            discordRPC: {
                label: "Discord Rich Presence",
                description: "Tampilkan aktivitas Anda saat ini di status Discord",
            },
            successSound: {
                label: "Aktifkan suara sukses",
                description:
                    "Aktifkan suara yang diputar saat instalasi aplikasi selesai",
            },
        },
        privacy: {
            title: "Privasi",
            errorReporting: {
                label: "Pelaporan Kesalahan",
                description:
                    "Bantu tingkatkan Dione dengan mengirimkan laporan kesalahan anonim",
            },
        },
        other: {
            title: "Lainnya",
            disableAutoUpdate: {
                label: "Nonaktifkan pembaruan otomatis",
                description:
                    "Menonaktifkan pembaruan otomatis. Peringatan: aplikasi Anda mungkin kehilangan perbaikan penting atau patch keamanan. Opsi ini tidak direkomendasikan untuk sebagian besar pengguna.",
            },
            logsDirectory: {
                label: "Direktori Log",
                description: "Lokasi tempat log aplikasi disimpan",
            },
            submitFeedback: {
                label: "Kirim Umpan Balik",
                description: "Laporkan masalah atau kendala apa pun yang Anda temui",
                button: "Kirim Laporan",
            },
            showOnboarding: {
                label: "Tampilkan onboarding",
                description:
                    "Atur ulang Dione ke keadaan awalnya dan tampilkan kembali onboarding untuk konfigurasi ulang",
                button: "Atur Ulang",
            },
            variables: {
                label: "Variabel",
                description: "Kelola variabel aplikasi dan nilainya",
                button: "Buka Variabel",
            },
            checkUpdates: {
                label: "Periksa pembaruan",
                description:
                    "Periksa pembaruan dan beri tahu Anda ketika versi baru tersedia",
                button: "Periksa pembaruan",
            },
        },
    },

    // report form
    report: {
        title: "Jelaskan Masalahnya",
        description:
            "Harap berikan detail tentang apa yang terjadi dan apa yang coba Anda lakukan.",
        placeholder:
            "Contoh: Saya mencoba menginstal aplikasi ketika kesalahan ini terjadi...",
        systemInformationTitle: "Informasi Sistem",
        disclaimer:
            "Informasi sistem berikut dan ID anonim akan disertakan dalam laporan Anda.",
        success: "Laporan berhasil dikirim!",
        error: "Gagal mengirim laporan. Silakan coba lagi.",
        send: "Kirim Laporan",
        sending: "Mengirim...",
        contribute:
            "Bantu kami membuat skrip ini kompatibel dengan semua perangkat",
    },

    // quick launch component
    quickLaunch: {
        title: "Peluncuran Cepat",
        addApp: "Tambah Aplikasi",
        tooltips: {
            noMoreApps: "Tidak ada aplikasi yang tersedia untuk ditambahkan",
        },
        selectApp: {
            title: "Pilih Aplikasi",
            description:
                "{count} aplikasi tersedia. Anda dapat memilih hingga {max}.",
        },
    },

    // missing dependencies modal
    missingDeps: {
        title: "Beberapa dependensi hilang!",
        installing: "Menginstal dependensi...",
        install: "Instal",
        logs: {
            initializing: "Memulai pengunduhan dependensi...",
            loading: "Memuat...",
            connected: "Terhubung ke server",
            disconnected: "Terputus dari server",
            error: {
                socket: "Kesalahan saat menyiapkan soket",
                install: "❌ Kesalahan saat menginstal dependensi: {error}",
            },
            allInstalled: "Semua dependensi sudah terinstal.",
        },
    },

    // delete loading modal
    deleteLoading: {
        uninstalling: {
            title: "Menghapus Instalasi",
            deps: "Menghapus instalasi dependensi",
            wait: "harap tunggu...",
        },
        success: {
            title: "Dihapus",
            subtitle: "dengan sukses",
            closing: "Menutup modal ini dalam",
            seconds: "detik...",
        },
        error: {
            title: "Tak terduga",
            subtitle: "kesalahan",
            hasOccurred: "telah terjadi",
            deps: "Dione tidak dapat menghapus dependensi apa pun, harap lakukan secara manual.",
            general:
                "Silakan coba lagi nanti atau periksa log untuk informasi lebih lanjut.",
        },
        loading: {
            title: "Memuat...",
            wait: "Harap tunggu...",
        },
    },

    // logs component
    logs: {
        loading: "Memuat...",
        disclaimer:
            "Log yang ditampilkan berasal dari aplikasi itu sendiri. Jika Anda melihat kesalahan, harap laporkan terlebih dahulu ke pengembang aplikasi asli.",
        status: {
            success: "Sukses",
            error: "Kesalahan",
            pending: "Tertunda",
        },
    },

    // loading states
    loading: {
        text: "Memuat...",
    },

    // iframe component
    iframe: {
        back: "Kembali",
        openFolder: "Buka folder",
        openInBrowser: "Buka di Peramban",
        openNewWindow: "Buka Jendela Baru",
        fullscreen: "Layar Penuh",
        stop: "Hentikan",
        reload: "Muat Ulang",
        logs: "Log",
    },

    // actions component
    actions: {
        reconnect: "Hubungkan Kembali",
        start: "Mulai",
        uninstall: "Hapus Instalasi",
        install: "Instal",
        publishedBy: "Diterbitkan oleh",
    },

    // promo component
    promo: {
        title: "Ingin ditampilkan di sini?",
        description: "Tampilkan alat Anda kepada komunitas kami",
        button: "Dapatkan Tampilan",
    },

    // installed component
    installed: {
        title: "Perpustakaan Anda",
        empty: {
            title: "Anda belum menginstal aplikasi apa pun",
            action: "Instal sekarang",
        },
    },

    // local component
    local: {
        title: "Skrip Lokal",
        upload: "Unggah Skrip",
        noScripts: "Tidak ada skrip yang ditemukan",
        deleting: "Menghapus skrip, harap tunggu...",
        uploadModal: {
            title: "Unggah Skrip",
            selectFile: "Klik untuk memilih file",
            selectedFile: "File yang Dipilih",
            scriptName: "Nama Skrip",
            scriptDescription: "Deskripsi Skrip (opsional)",
            uploadFile: "Unggah File",
            uploading: "Mengunggah...",
            errors: {
                uploadFailed: "Gagal mengunggah skrip. Silakan coba lagi.",
                uploadError: "Terjadi kesalahan saat mengunggah skrip.",
            },
        },
    },

    // feed component
    feed: {
        noScripts: "Tidak ada skrip yang ditemukan",
        errors: {
            notArray: "Data yang diambil bukan larik",
            fetchFailed: "Gagal mengambil skrip",
            notSupported: "Sayangnya %s tidak didukung pada %s Anda.",
            notSupportedTitle: "Perangkat Anda mungkin tidak kompatibel.",
        },
    },

    // search component
    search: {
        placeholder: "Cari skrip...",
        filters: {
            audio: "Audio",
            image: "Gambar",
            video: "Video",
            chat: "Obrolan",
        },
        sort: {
            label: "Urutkan berdasarkan",
            options: {
                recommended: "Direkomendasikan",
                recent: "Terbaru",
                updated: "Baru diperbarui",
                downloads: "Paling banyak diunduh",
                alphabetical: "Alfabetis",
            },
        },
    },
} as const;
