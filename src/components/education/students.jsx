import React from "react";
import {Link} from "react-router-dom";
import "./content.css";
import weCan from "../../img/we-can.jpg";

function Students () {
    return (
        <>
        <section class="post-header">
            <Link className="back-home" to={"/education"}><center>Back To Home</center></Link>
            <h1 class="header-title">I'm a Students</h1>
            <img src={weCan} alt="" class="header-img"/>
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
            
        
            <h1 class="judul">Apa yang Dapat Dilakukan Ketika Melihat Seseorang Dibully?</h1>
            <h2 class="sub-heading">Tidak Menyebarkan Rumor</h2>
            <p class="post-text">Jika ada orang yang membicarakan rumor atau gosip padamu yang belum tentu benar, jangan ikut menyebarkannya. Jika kamu ikut menyebarkan rumor yang belum jelas kebenarannya, kamu menjadi bagian dari masalah. Kamu pun juga tidak mau kan kalau ada orang yang menyebarkan rumor tidak benar tentangmu.</p>
            <h2 class="sub-heading">Tidak Menonton dan Ikut Bullying</h2>
            <p class="post-text">Bullies suka bila banyak penonton apalagi jika tindakannya didukung oleh penonton. Jangan berdiri saja dan melihat apa yang terjadi. Jangan diam saja jika bullying terjadi, ada seseorang yang membutuhkan bantuanmu. Cepatlah bertindak. Segera cari bantuan atau speak up.</p>
            <h2 class="sub-heading">Menawarkan Bantuan</h2>
            <p class="post-text">Penting untuk tidak sepenuhnya melindungi orang yang dibully. Pastikan mereka merasa kekuatan apa pada mereka sendiri dan kamu ada di sana untuk mendukung mereka. Cara yang baik untuk melakukan ini adalah dengan menanyakan bagaimana keadaannya, apakah ia baik-baik saja, bagaimana kamu dapat membantu mereka, atau langkah apa yang akan mereka ambil selanjutnya. Cukup menunjukkan bahwa kamu peduli itu dapat membuat perubahan besar.</p>
            <h2 class="sub-heading">Bertemanlah dengan Orang yang Dibully</h2>
            <p class="post-text">When someone is down they need a friend. Bertemanlah dengan mereka, be there for them. Luangkan waktu bersama mereka, pastikan mereka tahu mereka tidak sendirian. Dengarkan mereka bercerita mengenai keluh kesah mereka, tidak perlu menggurui atau menghakimi mereka. Tunjukkan bahwa kamu peduli. Menjadi teman yang pengertian dan suportif sangat berarti bagi mereka.</p>
            <h2 class="sub-heading">Stand Up for The Person Being Bullied</h2>
            <p class="post-text">Jika dirasa aman dan kamu punya cukup keberanian, kamu bisa menghentikan bullying itu secara langsung dengan speak up. Beritahu bullies bahwa apa yang mereka lakukan itu salah, itu tidak keren, dan mereka harus berhenti melakukannya. Keep it simple, bicaralah dengan tenang, dan tidak perlu bertindak agresif. Don't bully them back. Tindakan agresif malah akan membuat situasi memburuk. Mungkin saja orang lain yang tadinya takut untuk berbuat sesuatu jadi ikut berpartisipasi dalam menghentikan bullying.</p>
            <h2 class="sub-heading">Ceritakan pada Orang Dewasa</h2>
            <p class="post-text">Jika kamu takut menjadi sasaran bullying karena kamu berani speak up, kamu bisa menceritakan permasalahan bullying tersebut kepada orang dewasa. Kamu bisa melapor kepada wali kelas, guru bk (bimbingan konseling), kepala sekolah, atau orang dewasa yang kamu percaya. Ceritakan dengan jelas siapa yang dibully, siapa pelakunya, dimana dan kapan bullying itu terjadi.</p>
        
            <center>
            <h3 className="nanyeak">Sudah membaca semua materi?</h3>
            <h6>Yuk uji pemahamanmu!!</h6>
            <button className="quiz-btn">
            <Link className="quiz-link" to={"/education/students/studentsQuiz"}>Kerjakan Quiz</Link>
            </button>
            </center>
        </section>
        </>
    );
};

export default Students;