import React from "react"
import { Link } from "react-router-dom";
import "./content.css"
import teach from "../../img/teach.jpg"

function Teacher () {
    return (
        <>
        <section class="post-header">
            <Link className="back-home" to={"/education"}><center>Back To Home</center></Link>
            <h1 class="header-title">I'm a Teacher</h1>
            <img src={teach} alt="" class="header-img"/>
        </section>

        <section class="post-content post-container">
            <h1 class="judul">Apa itu Bullying?</h1>
            <h2 class="sub-heading">Pengertian dan Karakteristik Bullying</h2>
            <p class="post-text">Bullying atau perundungan adalah tindakan 
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

            <h2 class="sub-heading">Jenis-jenis Bullying</h2>
            <p class="post-text">Sherri Gordon mengkategorikan bullying menjadi 6 jenis yaitu:</p>
            <p class="post-text"><b>Physical Bullying</b>: jenis bullying dimana pelaku menggunakan tindakan fisik untuk menindas target yang dijadikan korban. Pelaku biasanya memiliki fisik yang lebih kuat dan bertindak lebih agresif daripada teman-temannya. Secara umum, physical bullying lebih sering dilakukan oleh laki-laki. Jenis bullying ini paling mudah diidentifikasi karena bentuk tindakannya fisik dan bekas dari kekerasan dapat dilihat.
                Contoh: menampar, memukul, menendang, mendorong, dan kekerasan fisik lainnya.</p>
            <p class="post-text"><b>Verbal Bullying</b>: jenis bullying dimana pelaku menggunakan kata-kata dan panggilan yang menyakiti dan merendahkan target. Biasanya pelaku memilih target mereka berdasarkan penampilan atau cara mereka berperilaku sehingga tak jarang orang berkebutuhan khusus menjadi sasaran verbal bullying. Verbal bullying biasanya sulit diidentifikasi karena seringkali muncul saat tidak ada orang dewasa yang melihat.
                Contoh: menghina, mengejek, mengucapkan kata-kata kasar, dan memberi julukan yang menyakiti perasaan korban.</p>
            <p class="post-text"><b>Relational Aggression</b>: jenis bullying dimana pelaku mencoba untuk mengintimidasi target atau menyabotase status sosial target. Tujuan dari relational aggression adalah untuk meningkatkan status sosial pelaku. Secara umum, relational aggression cenderung dilakukan oleh perempuan.
                Contoh: mengasingkan target dari suatu kelompok, menyebarkan desas-desus, memanipulasi situasi, dan merusak kepercayaan diri target.</p>
            <p class="post-text"><b>Cyberbullying</b>: jenis bullying dimana pelaku menggunakan internet, smartphone, dan teknologi lainnya untuk mengancam, mempermalukan, atau melecehkan target. Pelaku biasanya mengeluarkan kata-kata yang tidak berani mereka katakan secara langsung. Teknologi membuat mereka merasa anonim sehingga cyberbullying seringkali sangat kejam.
                Contoh: mengirim ancaman online, melakukan teror melalui social media, menuliskan komentar-komentar menyakitkan pada sebuah postingan, serta memposting hal yang bisa mempermalukan target.</p>
            <p class="post-text"><b>Sexual Bullying</b>: jenis bullying yang terdiri dari tindakan yang menargetkan seseorang secara seksual. Sexting dapat mengarah pada sexual bullying. Misalnya, seorang gadis mengirim foto dirinya kepada pacarnya. Ketika mereka putus, sang mantan menyebarkan foto itu. Pada akhirnya, si gadis menjadi sasaran sexual bullying. Beberapa laki-laki bahkan mungkin melihat ini sebagai undangan terbuka untuk menyerangnya secara seksual. Dalam kasus-kasus ekstrem, sexual bullying dapat mengarah pada sexual assault (serangan seksual).
                Contoh: pemanggilan nama seksual, gerakan vulgar terhadap target, sentuhan yang tak diinginkan, slut-shaming, sexual propositioning, berkomentar kasar tentang penampilan, tubuh, perkembangan seksual, atau aktivitas seksual seseorang.</p>
            <p class="post-text"><b>Prejudicial Bullying</b>: jenis bullying yang dilakukan berdasarkan prasangka terhadap etnis, ras, agama, atau orientasi seksual tertentu. Prejudicial bullying dapat mencakup jenis-janis bullying lainnya. Pelaku prejudicial bullying menargetkan orang lain yang dirasa berbeda dari mereka dan menjauhi, mengintimidasi, atau bahkan mendiskriminasi mereka.</p>
            
            <h1 class="judul-teacher">Apa yang harus saya lakukan ketika seorang anak memberi tahu saya bahwa dia di-bully atau dilecehkan?</h1>
            <p class="post-text">Tanggapi kejadian itu dengan serius.</p>
            <p class="post-text">Hargai dan berterima kasihlah pada siswa tersebut karena telah melapor kepada Anda.</p>
            <p class="post-text">Yakinkan dia bahwa itu bukan salahnya.</p>
            <p class="post-text">Tunjukkan empati.</p>
            <p class="post-text">Bantu anak yang di-bully untuk membela dirinya sendiri - bahwa dia bisa mengatakan tidak suka jika dikerjai oleh temannya.</p>
            <p class="post-text">Tanyakan kepada anak tentang apa yang dapat dilakukan untuk membuat dia merasa aman.</p>
            <p class="post-text">Bicaralah dengan setiap anak yang terlibat dalam situasi ini secara terpisah. Hindari menyalahkan, mengkritik, atau meneriaki di depan wajah mereka. Dorong dan hargai nilai kejujuran.</p>
            <p class="post-text">Pertimbangkan peran atau pengaruh 'kelompok sebaya'. Bullying terkadang dilakukan oleh kelompok. Jika bullying dilakukan oleh seorang anak, dengan bantuan atau dukungan dari anak-anak lain, mereka semua juga harus menanggung konsekuensinya bersama, terutama agar mengetahui dampak perbuatan mereka kepada anak yang dibully, serta meminta maaf.</p>
            <p class="post-text">Ambil tindakan kepada pelaku bullying. Beritahu si anak, orang tuanya, dan kelas mengenai perkembangan kasusnya, dengan tetapi menghormati semua pihak.</p>
            <p class="post-text">Tindak lanjuti secara teratur dengan anak tersebut mengenai kemajuan yang dibuat mengenai masalah ini sesudahnya.</p>
            <p class="post-text">Jika perlu, carilah bantuan dari pihak eksternal. Ketika Anda menghadapi masalah yang parah atau signifikan yang tidak Anda ketahui cara mengatasinya, laporkan kepada guru konseling sekolah, atau pekerja sosial, atau psikolog. Anda mungkin perlu menghubungi <b>Telepon Pelayanan Sosial Anak (TePSA) di 1500771.</b></p>
            <p class="post-text"></p>

            <center>
            <h3 className="nanyeak">Sudah membaca semua materi?</h3>
            <h6>Yuk uji pemahamanmu!!</h6>
            <button className="quiz-btn">
            <Link className="quiz-link" to={"/education/students/teacherQuiz"}>Kerjakan Quiz</Link>
            </button>
            </center>
        
        </section>
        </>
    );
};

export default Teacher;