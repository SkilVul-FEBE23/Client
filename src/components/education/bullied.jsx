import React from "react"
import { Link } from "react-router-dom";
import "./content.css"
import noBully from "../../img/no-bullying.jpg"

function Bullied () {
    return (
        <>
        <section className="post-header">
            <Link className="back-home" to={"/education"}><center>Back To Home</center></Link>
            <h1 className="header-title">I'm Being Bullied</h1>
            <img src={noBully} alt="" className="header-img"/>
        </section>

        <section className="post-content post-container">
            <h1 className="judul">Apa itu Bullying?</h1>
            <h2 className="sub-heading">Pengertian dan Karakteristik Bullying</h2>
            <p className="post-text">Bullying atau perundungan adalah tindakan 
                agresif yang muncul karena adanya ketimpangan dalam kekuatan/kekuasaan 
                yang nyata maupun hanya berupa persepsi (real or perceived). Ketimpangan 
                ini bisa berupa ketimpangan fisik, mental, maupun jumlah antara pelaku dan korban. 
                Suatu tindakan agresif dapat dikategorikan sebagai bullying jika:
            </p>
            <ul role="list">
                <li>Dilakukan secara <b>sengaja</b>: tindakan agresif sengaja dilakukan oleh pelaku dengan tujuan untuk menyakiti korban.</li>
                <li>Ada <b>ketidakseimbangan kekuatan</b>: pelaku merasa lebih kuat/berkuasa daripada korban 
                    sehingga melakukan tindakan dengan niat untuk mencederai, ancaman agresi lebih lanjut, 
                    dan terror dengan tujuan untuk mengontrol orang lain yang lebih lemah darinya.</li>
                <li>Ada <b>pengulangan</b>: tindakan agresif ini terjadi tidak hanya sekali melainkan berulang kali dalam waktu lama.</li>
            </ul>

            <h2 className="sub-heading">Jenis-jenis Bullying</h2>
            <p className="post-text">Sherri Gordon mengkategorikan bullying menjadi 6 jenis yaitu:</p>
            <p className="post-text"><b>Physical Bullying</b>: jenis bullying dimana pelaku menggunakan tindakan fisik untuk menindas target yang dijadikan korban. Pelaku biasanya memiliki fisik yang lebih kuat dan bertindak lebih agresif daripada teman-temannya. Secara umum, physical bullying lebih sering dilakukan oleh laki-laki. Jenis bullying ini paling mudah diidentifikasi karena bentuk tindakannya fisik dan bekas dari kekerasan dapat dilihat.
                Contoh: menampar, memukul, menendang, mendorong, dan kekerasan fisik lainnya.</p>
            <p className="post-text"><b>Verbal Bullying</b>: jenis bullying dimana pelaku menggunakan kata-kata dan panggilan yang menyakiti dan merendahkan target. Biasanya pelaku memilih target mereka berdasarkan penampilan atau cara mereka berperilaku sehingga tak jarang orang berkebutuhan khusus menjadi sasaran verbal bullying. Verbal bullying biasanya sulit diidentifikasi karena seringkali muncul saat tidak ada orang dewasa yang melihat.
                Contoh: menghina, mengejek, mengucapkan kata-kata kasar, dan memberi julukan yang menyakiti perasaan korban.</p>
            <p className="post-text"><b>Relational Aggression</b>: jenis bullying dimana pelaku mencoba untuk mengintimidasi target atau menyabotase status sosial target. Tujuan dari relational aggression adalah untuk meningkatkan status sosial pelaku. Secara umum, relational aggression cenderung dilakukan oleh perempuan.
                Contoh: mengasingkan target dari suatu kelompok, menyebarkan desas-desus, memanipulasi situasi, dan merusak kepercayaan diri target.</p>
            <p className="post-text"><b>Cyberbullying</b>: jenis bullying dimana pelaku menggunakan internet, smartphone, dan teknologi lainnya untuk mengancam, mempermalukan, atau melecehkan target. Pelaku biasanya mengeluarkan kata-kata yang tidak berani mereka katakan secara langsung. Teknologi membuat mereka merasa anonim sehingga cyberbullying seringkali sangat kejam.
                Contoh: mengirim ancaman online, melakukan teror melalui social media, menuliskan komentar-komentar menyakitkan pada sebuah postingan, serta memposting hal yang bisa mempermalukan target.</p>
            <p className="post-text"><b>Sexual Bullying</b>: jenis bullying yang terdiri dari tindakan yang menargetkan seseorang secara seksual. Sexting dapat mengarah pada sexual bullying. Misalnya, seorang gadis mengirim foto dirinya kepada pacarnya. Ketika mereka putus, sang mantan menyebarkan foto itu. Pada akhirnya, si gadis menjadi sasaran sexual bullying. Beberapa laki-laki bahkan mungkin melihat ini sebagai undangan terbuka untuk menyerangnya secara seksual. Dalam kasus-kasus ekstrem, sexual bullying dapat mengarah pada sexual assault (serangan seksual).
                Contoh: pemanggilan nama seksual, gerakan vulgar terhadap target, sentuhan yang tak diinginkan, slut-shaming, sexual propositioning, berkomentar kasar tentang penampilan, tubuh, perkembangan seksual, atau aktivitas seksual seseorang.</p>
            <p className="post-text"><b>Prejudicial Bullying</b>: jenis bullying yang dilakukan berdasarkan prasangka terhadap etnis, ras, agama, atau orientasi seksual tertentu. Prejudicial bullying dapat mencakup jenis-janis bullying lainnya. Pelaku prejudicial bullying menargetkan orang lain yang dirasa berbeda dari mereka dan menjauhi, mengintimidasi, atau bahkan mendiskriminasi mereka.</p>

            <h1 className="judul">Apa yang Harus Dilakukan Jika Menjadi Korban Bullying?</h1>
            <p className="post-text">Jika kamu menjadi korban bullying, pertama-tama kamu harus mengetahui 2 hal ini:</p>
            <p className="post-text"><b>Kamu tidak sendirian</b>: semua orang pernah dibully. Namun, sebagian besar dari mereka merahasiakannya karena mereka merasa malu dan takut. Mereka kira dengan mengabaikan masalah bullying, bullying akan hilang dengan sendirinya (padahal tidak begitu).</p>
            <p className="post-text"><b>Ini bukan salahmu</b>: kamu tidak meminta untuk dibully. Orang lainlah yang memutuskan untuk membully kamu. Bukan salahmu kalau kamu dibully. Jangan menyalahkan dirimu sendiri. </p>
            <p className="post-text">Setelah menyadari 2 hal di atas, berikut <b>DONT's and DOs</b> dalam menghadapi bully.</p>
        
            <h1 className="judul">DON'Ts</h1>
            <h2 className="sub-heading">Membully atau Membalas Pelaku Bullying</h2>
            <p className="post-text">Tidak ada baiknya membalas kejahatan dengan kejahatan. Itu hanya akan menunjukkan bahwa kamu tidak lebih baik dari bullies. Selain itu, bullying juga memiliki dampak buruk bagi semua pihak.</p>
            <h2 className="sub-heading">Mengabaikannya</h2>
            <p className="post-text">Jika kamu merasa tersiksa dengan bullying, jangan pernah mengabaikannya. Buat dirimu merasa lebih baik. Ceritalah pada orang lain.</p>
            <h2 className="sub-heading">Bolos Sekolah</h2>
            <p className="post-text">Jangan pernah sekalipun kamu bolos sekolah karena takut dibully. Bullies malah senang dengan hal itu karena mereka berhasil membuatmu takut. Mereka merasa lebih kuat dan akan lebih gencar membullymu.</p>
            <h2 className="sub-heading">Takut untuk Bercerita</h2>
            <p className="post-text">Jangan pernah takut bercerita pada orang lain. Jika bullying benar-benar membuatmu merasa terganggu, ceritalah. Dengan bercerita, kamu membagikan bebanmu pada orang lain sehingga penderitaanmu berkurang. Segala hal akan lebih mudah bila dihadapi bersama. Itulah gunanya keluarga dan teman. Mereka ada di saat kamu senang dan tidak akan meninggalkanmu ketika kamu sedih dan terpuruk.</p>
            <h2 className="sub-heading">Melukai Diri Sendiri</h2>
            <p className="post-text">Jangan pernah melakukan tindakan-tindakan yang melukai diri sendiri apalagi bunuh diri. Itu tidak akan menyelesaikan masalah. Hal-hal seperti itu bukan hanya akan melukai diri sendiri tetapi akan melukai hati orang-orang yang menyayangimu. Jangan berpikir kalau kamu menyakiti dirimu maka bullying akan hilang. Mereka akan senang karena mereka merasa lebih kuat darimu. Ingat, yang ingin kamu bahagiakan adalah keluargamu, teman-temanmu, dan orang-orang yang menyayangimu bukan para bullies.</p>
       
            <h1 className="judul">DOs</h1>
            <h2 className="sub-heading">Cuek terhadap Bullies</h2>
            <p className="post-text">Bully ingin kamu untuk bereaksi terhadap tindakan mereka. Tujuan mereka mengganggumu adalah untuk membuatmu merasa lemah, sedih, dan takut. Jika kamu menunjukkan bahwa kamu tenang, kamu baik-baik saja, dan kamu tidak takut terhadap mereka, mereka tidak mendapatkan apa yang mereka inginkan sehingga mereka akan berhenti mengganggumu dengan sendirinya. Hal ini juga berlaku dalam cyberbullying. Diamkan saja, mereka tidak berhak atas perhatianmu. Keluarga dan teman-temanmu lebih berhak mendapatkan perhatianmu.</p>
            <h2 className="sub-heading">Simpan Bukti-bukti</h2>
            <p className="post-text">Dalam cyberbullying terkadang mengacuhkannya akan membuatnya memburuk. Jika cyberbullying tidak berhenti, simpanlah bukti-bukti tersebut dan ceritakan pada orang tua. Kamu juga bisa melaporkannya kepada pihak yang berwenang.</p>
            <h2 className="sub-heading">Stay Positive</h2>
            <p className="post-text">Cobalah untuk mengingat hal-hal baik dalam dirimu. Ingat sifat-sifat baikmu, kebaikan-kebaikan yang pernah kamu lakukan, hal-hal yang kamu sukai, dan momen-momen menyenangkan dalam hidupmu. Ingat orang-orang yang kamu sayangi dan sadarilah bahwa mereka pun menyayangimu dan tidak hal buruk terjadi padamu. Lakukan hal-hal yang kamu sukai Bersama orang-orang yang kamu sayangi. Itu akan sangat membantumu untuk stay positive. Ingatlah bahwa kamu berharga dan tidak ada seorangpun yang berhak membuatmu merasa tak berdaya.</p>
            <h2 className="sub-heading">Bangun Kepercayaan Dirimu</h2>
            <p className="post-text">Bullies biasanya menargetkan orang yang mereka pikir lebih lemah dari mereka. Bangunlah kepercayaan dirimu dan tunjukkan bahwa kamu adalah pribadi yang kuat dan kamu tidak takut terhadap mereka.</p>
            <h2 className="sub-heading">Perbanyak Teman</h2>
            <p className="post-text">Bullies biasanya mengganggu satu orang bukan satu kelompok. Bergaullah dan perbanyak temanmu. Bullies tidak akan mengganggumu jika kamu bersama teman-temanmu.</p>
            <h2 className="sub-heading">Ceritalah pada Orang Lain</h2>
            <p className="post-text">JIka bullies tetap mengganggumu, cobalah untuk menceritakan hal tersebut pada teman, orang tua, atau guru. Dengan bercerita, kamu bisa mendapatkan bantuan dan dukungan. Selain orang-orang terdekat, kamu juga bisa bercerita pada konselor atau psikolog. Ceritakan dengan jelas apa yang terjadi, siapa pelakunya, kapan bullying terjadi, dimana bullying itu terjadi, sudah berapa lama hal itu berlangsung, dan bagaimana perasaanmu. Tanyakan juga apa yang mereka lakukan untuk membantumu dan menghentikan bullying.</p>
            <h2 className="sub-heading"></h2>
            <p className="post-text"></p>


            <center>
            <h3 className="nanyeak">Sudah membaca semua materi?</h3>
            <h6>Yuk uji pemahamanmu!!</h6>
            <button className="quiz-btn">
            <Link className="quiz-link" to={"/education/students/bulliedQuiz"}>Kerjakan Quiz</Link>
            </button>
            </center>
        </section>
        </>
    );
};

export default Bullied;