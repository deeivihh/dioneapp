export const ar = {
    // common actions and states
    common: {
        cancel: "إلغاء",
        loading: "جارٍ التحميل...",
        error: "خطأ",
        success: "نجاح",
        pending: "قيد الانتظار",
        back: "رجوع",
        unselectAll: "إلغاء تحديد الكل",
        selectAll: "تحديد الكل",
    },

    // authentication and access related
    noAccess: {
        title: "انضم إلى القائمة البيضاء لـ Dione",
        description:
            "Dione قيد الإنشاء ويسمح لعدد محدود من المستخدمين بالوصول إليه. انضم إلى قائمتنا البيضاء الآن للوصول إلى الإصدارات المستقبلية من تطبيقنا.",
        join: "انضمام",
        logout: "تسجيل الخروج",
    },

    // first time user experience
    firstTime: {
        welcome: {
            title: "مرحبًا بك في",
            subtitle:
                "شكرًا لانضمامك إلينا مبكرًا في هذه الرحلة. قم بتسجيل الدخول إلى حسابك للبدء.",
            login: "تسجيل الدخول",
            copyLink: "نسخ الرابط",
            skipLogin: "المتابعة بدون تسجيل دخول",
        },
        loggingIn: {
            title: "جارٍ تسجيل الدخول...",
            authError: "تعذر المصادقة؟",
            goBack: "العودة",
        },
        languageSelector: {
            title: "اختر لغتك",
        },
        ready: {
            title: "أنت جاهز!",
            subtitle: "يسعدنا وجودك هنا",
            finish: "إنهاء",
        },
        clipboard: {
            success: "تم النسخ إلى الحافظة بنجاح، الآن قم بلصقه في متصفحك!",
        },
        selectPath: {
            title: "حدد مسار التثبيت",
            button: "تحديد مسار",
            success: "التالي",
        },
    },

    // error handling
    error: {
        title: "حدث خطأ غير متوقع",
        description: "لقد اكتشفنا خطأ غير متوقع في التطبيق، نعتذر عن أي إزعاج.",
        return: "رجوع",
        report: {
            toTeam: "إبلاغ الفريق",
            sending: "جارٍ إرسال التقرير...",
            success: "تم إرسال التقرير!",
            failed: "فشل إرسال التقرير",
        },
    },

    // account related
    account: {
        title: "الحساب",
        logout: "تسجيل الخروج",
        stats: {
            timeSpent: {
                title: "الوقت المستغرق",
                subtitle: "في آخر 7 أيام",
            },
            sessions: {
                title: "الجلسات",
                subtitle: "في آخر 7 أيام",
            },
            shared: {
                title: "تمت المشاركة",
                subtitle: "في آخر 7 أيام",
            },
            streak: {
                title: "سلسلة",
                subtitle: "أيام متتالية",
                days: "أيام",
            },
        },
    },

    // toast notifications
    toast: {
        close: "إغلاق",
        install: {
            downloading: "جارٍ تنزيل %s...",
            starting: "جارٍ بدء %s...",
            uninstalling: "جارٍ إلغاء تثبيت %s...",
            reconnecting: "جارٍ إعادة توصيل %s...",
            retrying: "جارٍ محاولة تثبيت %s مرة أخرى...",
            success: {
                stopped: "تم إيقاف %s بنجاح.",
                uninstalled: "تم إلغاء تثبيت %s بنجاح.",
                logsCopied: "تم نسخ السجلات بنجاح إلى الحافظة.",
                depsInstalled: "تم تثبيت التبعيات بنجاح.",
                shared: "تم نسخ رابط التنزيل إلى الحافظة!",
            },
            error: {
                download: "خطأ في بدء التنزيل: %s",
                start: "خطأ في بدء %s: %s",
                stop: "خطأ في إيقاف %s: %s",
                uninstall: "خطأ في إلغاء تثبيت %s: %s",
                serverRunning: "الخادم قيد التشغيل بالفعل.",
                tooManyApps: "أبطئ! لديك بالفعل 6 تطبيقات قيد التشغيل في نفس الوقت.",
            },
        },
    },

    // titlebar component
    titlebar: {
        closing: {
            title: "جارٍ إيقاف التطبيقات...",
            description:
                "سيتم إغلاق Dione تلقائيًا بعد إغلاق جميع التطبيقات المفتوحة.",
        },
    },

    // sidebar component
    sidebar: {
        tagline: "استكشف، ثبّت، ابتكر — بنقرة واحدة.",
        activeApps: "التطبيقات النشطة",
        update: {
            title: "التحديث متوفر",
            description:
                "يتوفر إصدار جديد من Dione، يرجى إعادة تشغيل التطبيق للتحديث.",
            tooltip: "تحديث جديد متوفر، يرجى إعادة تشغيل Dione للتحديث.",
        },
        tooltips: {
            library: "المكتبة",
            settings: "الإعدادات",
            account: "الحساب",
            logout: "تسجيل الخروج",
            login: "تسجيل الدخول",
            capture: "التقاط",
        },
    },

    // home page
    home: {
        featured: "مميز",
        explore: "استكشاف",
    },

    // settings page
    settings: {
        applications: {
            title: "التطبيقات",
            installationDirectory: {
                label: "دليل التثبيت",
                description: "اختر مكان تثبيت التطبيقات الجديدة افتراضيًا",
            },
            binDirectory: {
                label: "دليل الثنائيات",
                description:
                    "اختر مكان تخزين ملفات التطبيق الثنائية لسهولة الوصول إليها",
            },
            cleanUninstall: {
                label: "إلغاء تثبيت نظيف",
                description: "إزالة جميع التبعيات ذات الصلة عند إلغاء تثبيت التطبيقات",
            },
            autoOpenAfterInstall: {
                label: "فتح تلقائي بعد التثبيت",
                description: "فتح التطبيقات تلقائيًا لأول مرة بعد التثبيت",
            },
            deleteCache: {
                label: "حذف ذاكرة التخزين المؤقت",
                description: "إزالة جميع البيانات المخزنة مؤقتًا من التطبيقات",
                button: "حذف ذاكرة التخزين المؤقت",
                deleting: "جارٍ الحذف...",
                deleted: "تم الحذف",
                error: "خطأ",
            },
        },
        interface: {
            title: "الواجهة",
            displayLanguage: {
                label: "لغة العرض",
                description: "اختر لغة الواجهة المفضلة لديك",
            },
            helpTranslate: "🤔 لا ترى لغتك؟ ساعدنا في إضافة المزيد!",
            compactView: {
                label: "عرض مدمج",
                description:
                    "استخدم تصميمًا أكثر تكثيفًا لتناسب المزيد من المحتوى على الشاشة",
            },
        },
        notifications: {
            title: "الإشعارات",
            systemNotifications: {
                label: "إشعارات النظام",
                description: "عرض إشعارات سطح المكتب للأحداث الهامة",
            },
            installationAlerts: {
                label: "تنبيهات التثبيت",
                description: "احصل على إشعار عند اكتمال تثبيت التطبيقات",
            },
            discordRPC: {
                label: "Discord Rich Presence",
                description: "عرض نشاطك الحالي في حالة Discord",
            },
            successSound: {
                label: "تفعيل صوت النجاح",
                description: "تفعيل الصوت الذي يتم تشغيله عند اكتمال تثبيت التطبيقات",
            },
        },
        privacy: {
            title: "الخصوصية",
            errorReporting: {
                label: "الإبلاغ عن الأخطاء",
                description:
                    "المساعدة في تحسين Dione عن طريق إرسال تقارير أخطاء مجهولة",
            },
        },
        other: {
            title: "أخرى",
            disableAutoUpdate: {
                label: "تعطيل التحديثات التلقائية",
                description:
                    "يعطل التحديثات التلقائية. تحذير: قد يفوّت تطبيقك الإصلاحات الهامة أو التصحيحات الأمنية. لا يُنصح بهذا الخيار لمعظم المستخدمين.",
            },
            logsDirectory: {
                label: "دليل السجلات",
                description: "الموقع الذي يتم فيه تخزين سجلات التطبيق",
            },
            submitFeedback: {
                label: "إرسال ملاحظات",
                description: "الإبلاغ عن أي مشاكل أو صعوبات تواجهها",
                button: "إرسال تقرير",
            },
            showOnboarding: {
                label: "عرض الإعدادات الأولية",
                description:
                    "إعادة تعيين Dione إلى حالته الأولية وإعادة عرض الإعدادات الأولية لإعادة التكوين",
                button: "إعادة تعيين",
            },
            variables: {
                label: "المتغيرات",
                description: "إدارة متغيرات التطبيق وقيمها",
                button: "فتح المتغيرات",
            },
            checkUpdates: {
                label: "التحقق من التحديثات",
                description: "التحقق من التحديثات وإشعارك عند توفر إصدار جديد",
                button: "التحقق من التحديثات",
            },
        },
    },

    // report form
    report: {
        title: "وصف المشكلة",
        description: "يرجى تقديم تفاصيل حول ما حدث وما كنت تحاول القيام به.",
        placeholder: "مثال: كنت أحاول تثبيت تطبيق عندما حدث هذا الخطأ...",
        systemInformationTitle: "معلومات النظام",
        disclaimer: "سيتم تضمين معلومات النظام التالية ومعرف مجهول مع تقريرك.",
        success: "تم إرسال التقرير بنجاح!",
        error: "فشل إرسال التقرير. يرجى المحاولة مرة أخرى.",
        send: "إرسال تقرير",
        sending: "جارٍ الإرسال...",
        contribute: "ساعدنا في جعل هذا البرنامج النصي متوافقًا مع جميع الأجهزة",
    },

    // quick launch component
    quickLaunch: {
        title: "تشغيل سريع",
        addApp: "إضافة تطبيق",
        tooltips: {
            noMoreApps: "لا توجد تطبيقات متاحة للإضافة",
        },
        selectApp: {
            title: "اختر تطبيقًا",
            description:
                "التطبيقات المتاحة هي {count}. يمكنك اختيار ما يصل إلى {max}.",
        },
    },

    // missing dependencies modal
    missingDeps: {
        title: "بعض التبعيات مفقودة!",
        installing: "جارٍ تثبيت التبعيات...",
        install: "تثبيت",
        logs: {
            initializing: "جارٍ بدء تنزيل التبعيات...",
            loading: "جارٍ التحميل...",
            connected: "تم الاتصال بالخادم",
            disconnected: "تم قطع الاتصال بالخادم",
            error: {
                socket: "خطأ في إعداد المقبس",
                install: "❌ خطأ في تثبيت التبعيات: {error}",
            },
            allInstalled: "جميع التبعيات مثبتة بالفعل.",
        },
    },

    // delete loading modal
    deleteLoading: {
        uninstalling: {
            title: "جارٍ إلغاء التثبيت",
            deps: "جارٍ إلغاء تثبيت التبعيات",
            wait: "يرجى الانتظار...",
        },
        success: {
            title: "تم إلغاء التثبيت",
            subtitle: "بنجاح",
            closing: "إغلاق هذه النافذة في",
            seconds: "ثواني...",
        },
        error: {
            title: "غير متوقع",
            subtitle: "خطأ",
            hasOccurred: "قد حدث",
            deps: "لم يتمكن Dione من إزالة أي تبعيات، يرجى القيام بذلك يدويًا.",
            general:
                "يرجى المحاولة مرة أخرى لاحقًا أو التحقق من السجلات لمزيد من المعلومات.",
        },
        loading: {
            title: "جارٍ التحميل...",
            wait: "يرجى الانتظار...",
        },
    },

    // logs component
    logs: {
        loading: "جارٍ التحميل...",
        disclaimer:
            "السجلات المعروضة هي من التطبيق نفسه. إذا رأيت خطأ، يرجى إبلاغه لمطوري التطبيق الأصلي أولاً.",
        status: {
            success: "نجاح",
            error: "خطأ",
            pending: "قيد الانتظار",
        },
    },

    // loading states
    loading: {
        text: "جارٍ التحميل...",
    },

    // iframe component
    iframe: {
        back: "رجوع",
        openFolder: "فتح المجلد",
        openInBrowser: "فتح في المتصفح",
        openNewWindow: "فتح نافذة جديدة",
        fullscreen: "ملء الشاشة",
        stop: "إيقاف",
        reload: "إعادة تحميل",
        logs: "السجلات",
    },

    // actions component
    actions: {
        reconnect: "إعادة الاتصال",
        start: "بدء",
        uninstall: "إلغاء التثبيت",
        install: "تثبيت",
        publishedBy: "نشر بواسطة",
    },

    // promo component
    promo: {
        title: "هل تريد الظهور هنا؟",
        description: "اعرض أداتك لمجتمعنا",
        button: "عرض",
    },

    // installed component
    installed: {
        title: "مكتبتك",
        empty: {
            title: "ليس لديك أي تطبيقات مثبتة",
            action: "تثبيت واحد الآن",
        },
    },

    // local component
    local: {
        title: "برامج نصية محلية",
        upload: "تحميل برنامج نصي",
        noScripts: "لم يتم العثور على برامج نصية",
        deleting: "جارٍ حذف البرنامج النصي، يرجى الانتظار...",
        uploadModal: {
            title: "تحميل برنامج نصي",
            selectFile: "انقر لتحديد ملف",
            selectedFile: "الملف المحدد",
            scriptName: "اسم البرنامج النصي",
            scriptDescription: "وصف البرنامج النصي (اختياري)",
            uploadFile: "تحميل الملف",
            uploading: "جارٍ التحميل...",
            errors: {
                uploadFailed: "فشل تحميل البرنامج النصي. يرجى المحاولة مرة أخرى.",
                uploadError: "حدث خطأ أثناء تحميل البرنامج النصي.",
            },
        },
    },

    // feed component
    feed: {
        noScripts: "لم يتم العثور على برامج نصية",
        errors: {
            notArray: "البيانات التي تم جلبها ليست مصفوفة",
            fetchFailed: "فشل جلب البرامج النصية",
            notSupported: "للأسف، %s غير مدعوم على جهاز %s الخاص بك.",
            notSupportedTitle: "قد يكون جهازك غير متوافق.",
        },
    },

    // search component
    search: {
        placeholder: "البحث عن البرامج النصية...",
        filters: {
            audio: "صوتي",
            image: "صورة",
            video: "فيديو",
            chat: "دردشة",
        },
        sort: {
            label: "Sort by",
            options: {
                recommended: "Recommended",
                recent: "Newest",
                updated: "Recently updated",
                downloads: "Most downloaded",
                alphabetical: "Alphabetical",
            },
        },
    },
} as const;
