<script setup>

</script>

<template>
	<div class="bg-latar">
		<!-- Modal -->
		<div x-data="{ showModal : true }" >
			<!-- Modal Background -->
			<div x-show="showModal" class="fixed latar-modal text-gray-500 flex items-center justify-center overflow-hidden z-50 left-0 right-0 top-0 bottom-0" x-transition:enter="transition ease duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
				<!-- Modal -->
				<div class="relative h-[100vh]">
					<div class="flex flex-col items-center justify-center p-4">
						<div class="text-center mt-12 lg:mt-5">
							<p class="text-neutral-500 font-bold uppercase">Undangan Pernikahan</p>
						</div>
						<div class="text-center mt-6 mb-16 lg:mt-4 lg:mb-10">
							<img class="" src="../assets/images/icon-modal.png" alt="">
						</div>
						<div class="text-center space-y-4">
							<p class="text-neutral-500">kpd. Bpk/Ibu/Saudara/i</p>
							<p class="text-2xl underline text-neutral-500 font-semibold">Rizky Aditya</p>
							<p class="text-neutral-500">Anda telah diundang ke hari bahagia kami</p>
						</div>
						<div class="py-4">
							<button class="bg-nude/90 rounded-lg px-4 py-2 text-white shadow-md " x-on:click="showModal = false">
								Buka Undangan
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	<section id="top">
		<div class="relative antialiased">
			<!-- <img class="object-cover w-full lg:flex hidden" src="../assets/images/top.png" alt=""> -->
			<div class="w-full h-[90vh] lg:h-[97vh]">
				<!-- <img class="object-cover lg:object-center lg:h-[100vh] lg:scale-100 scale-125 w-full" src="../assets/images/1.png" alt=""> -->
				<div class="pic-wrapper top-0">
					<figure class="pic-1">
						<img class="object-cover w-full h-[90vh] lg:h-[97vh] lg:object-center" src="../assets/images/1.png" alt="">
					</figure>
					<figure class="pic-2">
						<img class="object-cover w-full h-[90vh] lg:h-[97vh] lg:object-[0%,30%]" src="../assets/images/2.png" alt="">
					</figure>
					<figure class="pic-3">
						<img class="object-cover w-full h-[90vh] lg:h-[97vh] lg:object-[0%,30%]" src="../assets/images/3.png" alt="">
					</figure>
				</div>
				<div class="absolute bottom-0">
					<img class="w-full object-cover hidden lg:flex" src="../assets/images/wave-akad-desktop.png" alt="">
					<img class="w-full object-cover -mb-1 lg:hidden flex" src="../assets/images/wave-akad-mobile.png" alt="">
				</div>
			</div>
			
			<div class="absolute py-10 top-0 transform flex flex-col w-full  lg:h-[100vh] items-center z-10" data-aos="fade-up">
				<p class="text-base font-bold text-white/90 leading-normal text-center">WE INVITED YOU TO CELEBRATED <br> OUR WEDDING</p>
				<img class="w-32 text-white mt-5" src="../assets/images/Frame.png" alt="">
			</div>
			<div class="absolute bottom-0 w-full pb-24 flex flex-col items-center z-10" data-aos="fade-up">
				<p class="text-6xl text-white font-aladin">Syarah & Ifan</p>
				<p class="text-xs mt-4 uppercase text-white/80">12 FEBRUARI 2022</p>
			</div>
		</div>
	</section>
	<section id="open">
		<div class="latar">
		<div class="container mx-auto px-5 relative">
			<div class="pt-5 pb-10">
			<div class="flex flex-col items-center py-6" data-aos="fade-up">
				<img class="w-36 text-black" src="../assets/images/path42.png" alt="">
				<p class="text-3xl font-aladin text-nude font-bold py-4 text-center">“Assalamualaikum Warahmatullahi Wabarakatuh”</p>
				<p class="text-center leading-normal">Tanpa mengurangi rasa hormat, Kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan putra putri kami :</p>
			</div>
			<div class="flex flex-col lg:flex-row lg:justify-around items-center">
				<div class="flex flex-col items-center">
					<div class="p-2 bg-gradient-to-br from-nude rounded-full" data-aos="fade-right">
						<img class="rounded-full" src="../assets/images/girl.png" alt="">
					</div>
					<div class="text-center mt-4" data-aos="zoom-in">
						<p class="text-3xl mb-4 font-aladin text-nude">Syarah reysita yusuf </p>
						<p class="font-semibold text-neutral-400">Putri dari :</p>
						<p class="font-bold text-neutral-400">Bapak Achmad Yusuf & Ibu Ita Masyitah</p>
					</div>
				</div>
				<div class="py-8 lg:py-0" data-aos="fade-down">
					<img class="w-12 h-12" src="../assets/images/And.png" alt="">
				</div>
				<div class="flex flex-col items-center">
					<div class="p-2 bg-gradient-to-br from-nude rounded-full" data-aos="fade-left">
						<img class="rounded-full" src="../assets/images/boy.png" alt="">
					</div>
					<div class="text-center mt-4" data-aos="zoom-in">
						<p class="text-3xl mb-4 font-aladin text-nude">Briptu Ifan Aditiya Eka Widiatama </p>
						<p class="font-semibold text-neutral-400">Putri dari :</p>
						<p class="font-bold text-neutral-400">Bapak Sarmadi & Ibu Lilik Sumarni </p>
					</div>
				</div>
			</div>
			</div>
		</div>
		</div>
	</section>
	<section id="wave1" >
		<div class="relative">
			<div class="absolute top-0">
				<img class="w-full object-cover -mt-4 hidden lg:flex" src="../assets/images/wave1.png" alt="">
				<img class="w-full object-cover -mt-4 lg:hidden flex" src="../assets/images/wave-mobile.png" alt="">
			</div>
			<img class="lg:h-[30rem] object-cover w-full object-top" src="../assets/images/image2.png" alt="">
			<div class="absolute z-10 transform top-1/2 left-1/2 lg:w-1/2 w-full px-4 lg:px-0 text-xs lg:text-base -translate-x-1/2 -translate-y-1/2 text-center" >
				<p class="text-white italic" data-aos="fade-up">"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."</p>
				<p class="mt-5 text-white italic font-semibold" data-aos="fade-up">Q.S. Ar-Rum:21</p>
			</div>
			<div class="absolute bottom-0">
				<img class="w-full object-cover transform rotate-180 -mb-4 hidden lg:flex" src="../assets/images/wave1.png" alt="">
				<img class="w-full object-cover transform rotate-180 -mb-4 flex lg:hidden" src="../assets/images/wave-mobile.png" alt="">
			</div>
		</div>
	</section>

	<section id="wave2">
		<div class="latar2">
			<div class="container mx-auto px-5">
				<div class="py-16">
					<div class="flex flex-col items-center ">
						<p class="text-center text-3xl font-rancho text-nude mb-5" data-aos="fade-down">Akad Pernikahan</p>
						<div class="lg:w-2/3 bg-white border rounded-lg border-pinkrose pt-3 pb-2 px-2" data-aos="flip-left">
							<div class="flex flex-col lg:flex-row lg:justify-around items-center">
								<div class="flex flex-col items-center space-y-4 lg:w-1/2 mb-5 lg:mb-0">
									<p class="text-neutral-400 font-bold text-5xl">12</p>
									<p class="text-neutral-400 text-xs">Febuari 2022</p>
									<p class="text-neutral-400 text-xs">09.00 Wita -  Selesai</p>
								</div>
								<div class="flex flex-col items-center space-y-4 lg:w-1/2">
									<img class="w-12 h-12" src="../assets/images/ic_round-location-city.png" alt="">
									<p class="text-neutral-400 font-semibold text-center">Harris Hotel & Residences Sunset Road - Bali</p>
									<p class="text-neutral-400 text-xs text-center">Jl. Pura Mertasari, Jl. Sunset Road, Kuta, Bali</p>
								</div>
							</div>
							<hr class="mt-3">
							<div class="flex justify-center py-4">
								<a class="bg-nude text-white rounded-md px-4 py-2" href="#">Lihat Lokasi di Peta</a>
							</div>
						</div>
					</div>
					
					<div class="text-center my-16" data-aos="zoom-in-up">
						<p class="text-nude text-5xl font-rancho mb-2">Protokol Covid-19</p>
						<p class="text-xs text-neutral-400">Tanpa mengurangi rasa hormat, dikarenakan situasi yang sedang terjadi ditengah Pandemi Covid-19 ini kami memohon maaf karena acara akan diselenggarakan sesuai peraturan dan himbauan pemerintah.</p>
					</div>
					<div class="grid grid-cols-2 gap-y-4 lg:gap-y-0 lg:grid-cols-4">
						<div class="flex flex-col items-center" data-aos="flip-right">
							<img class="w-20 mb-2" src="../assets/images/mask.png" alt="">
							<p class="text-neutral-400 text-xs">Memakai Masker</p>
						</div>
						<div class="flex flex-col items-center" data-aos="flip-right">
							<img class="w-20 mb-2" src="../assets/images/sanitizier.png" alt="">
							<p class="text-neutral-400 text-xs">Memakai Hand Sanitizer</p>
						</div>
						<div class="flex flex-col items-center" data-aos="flip-right">
							<img class="w-20 mb-2" src="../assets/images/wash.png" alt="">
							<p class="text-neutral-400 text-xs">Mencuci Tangan</p>
						</div>
						<div class="flex flex-col items-center" data-aos="flip-right">
							<img class="w-20 mb-2" src="../assets/images/jagajarak.png" alt="">
							<p class="text-neutral-400 text-xs">Menjaga Jarak</p>
						</div>
					</div>	
				</div>
			</div>
		</div>
	</section>
	<section id="wave1" >
		<div class="relative">
			<div class="absolute top-0">
				<img class="w-full object-cover -mt-4 hidden lg:flex" src="../assets/images/wave1.png" alt="">
				<img class="w-full object-cover -mt-4 lg:hidden flex" src="../assets/images/wave-mobile.png" alt="">
			</div>
			<img class="lg:h-[30rem] object-cover w-full lg:object-top lg:hidden" src="../assets/images/image3.png" alt="">
			<img class="object-cover w-full lg:object-top hidden lg:flex" src="../assets/images/image4.png" alt="">
			<div class="absolute z-10 transform top-[5%] lg:top-[10%] w-full text-center">
				<p class="text-center font-rancho text-4xl mb-5 text-white" data-aos="fade-down">Save the Date</p>
				<div class="flex lg:justify-around flex-col lg:flex-row items-center mb-8">
					<div class="flex flex-col items-center" data-aos="flip-right" data-aos-delay="500">
						<p class="text-white font-mclaren text-8xl mb-2">12</p>
						<p class="text-white uppercase">FOR THE WEDDING</p>
					</div>
					<div class="flex flex-col items-center" data-aos="flip-right" data-aos-delay="1000">
						<p class="text-white font-mclaren text-8xl mb-2">02</p>
						<p class="text-white uppercase">SYARAH & IFAN</p>
					</div>
					<div class="flex flex-col items-center" data-aos="flip-right" data-aos-delay="1500">
						<p class="text-white font-mclaren text-8xl mb-2">22</p>
						<p class="text-white uppercase">KUTA, BALI</p>
					</div>
				</div>
				<div class="flex justify-center" data-aos="fade-up" data-aos-delay="1500">
					<div class="flex justify-between space-x-5 lg:space-x-0 lg:w-1/3 px-10 lg:px-0">
						<div class="flex flex-col items-center">
							<div class="p-2 rounded-full border border-white">
								<p class="text-white text-2xl">02</p>
							</div>
							<p class="text-white text-xs mt-2">Hari</p>
						</div>
						<div class="flex flex-col items-center">
							<div class="p-2 rounded-full border border-white">
								<p class="text-white text-2xl">02</p>
							</div>
							<p class="text-white text-xs mt-2">Jam</p>
						</div>
						<div class="flex flex-col items-center">
							<div class="p-2 rounded-full border border-white">
								<p class="text-white text-2xl">02</p>
							</div>
							<p class="text-white text-xs mt-2">Menit</p>
						</div>
						<div class="flex flex-col items-center">
							<div class="p-2 rounded-full border border-white">
								<p class="text-white text-2xl">02</p>
							</div>
							<p class="text-white text-xs mt-2">Detik</p>
						</div>
					</div>
				</div>
				<div class="text-center mt-5" data-aos="fade-up" >
					<a href="#" class="bg-nude text-xs px-5 font-poppins transform py-2 rounded-md text-white hover:bg-nude/75 hover:scale-125">Save Date to Calendar</a>
				</div>
			</div>
			<div class="absolute bottom-0">
				<img class="w-full object-cover transform rotate-180 -mb-4 hidden lg:flex" src="../assets/images/wave1.png" alt="">
				<img class="w-full object-cover transform rotate-180 -mb-4 flex lg:hidden" src="../assets/images/wave-mobile.png" alt="">
			</div>
		</div>
	</section>
	<section id="galery">
		<div class="container mx-auto px-5">
			<div class="py-10 lg:px-10">
					<div class="text-center mb-8" data-aos="zoom-in-up">
						<p class="text-nude text-3xl font-rancho tracking-wide mb-2">Galeri Foto</p>
						<p class="text-xs">Begitulah keajaiban fotografi, tidak hanya mengabadikan momen penting dalam hidup, tapi juga membekukan kenangan yang indah & diingat untuk selamanya.</p>
					</div>
					<div class="grid lg:grid-cols-3 grid-cols-1 gap-y-6 lg:gap-x-6">
						<img class="shadow-lg" src="../assets/images/galery1.png" alt="" data-aos="flip-right">
						<img class="shadow-lg" src="../assets/images/galery2.png" alt="" data-aos="flip-right">
						<img class="shadow-lg" src="../assets/images/galery3.png" alt="" data-aos="flip-right">
						<img class="shadow-lg" src="../assets/images/galery4.png" alt="" data-aos="flip-right">
						<img class="shadow-lg" src="../assets/images/galery5.png" alt="" data-aos="flip-right">
						<img class="shadow-lg" src="../assets/images/galery6.png" alt="" data-aos="flip-right">
					</div>
					<!-- <div class="flex lg:hidden">
					<div id="thumbnail-slider" class="splide">
						<div class="splide__track">
							<ul class="splide__list">
								<li class="splide__slide">
									<img src="../assets/images/galery1.png">
								</li>
								<li class="splide__slide">
									<img src="../assets/images/galery2.png">
								</li>
								<li class="splide__slide">
									<img src="../assets/images/galery3.png">
								</li>
								<li class="splide__slide">
									<img src="../assets/images/galery4.png">
								</li>
								<li class="splide__slide">
									<img src="../assets/images/galery5.png">
								</li>
								<li class="splide__slide">
									<img src="../assets/images/galery6.png">
								</li>
							</ul>
						</div>
					</div>
				</div> -->
					<div class="mt-10">
						<div class="text-center mb-10">
							<div class="flex justify-center">
								<img class="mb-4" src="../assets/images/message-header.png" alt="">
							</div>
							<p class="text-neutral-400 tracking-wide font-rancho text-3xl">Pesan & Kesan</p>
						</div>
						<div class="flex lg:justify-between flex-col lg:flex-row  lg:gap-x-8">
							<div class="lg:w-1/2 w-full mb-4">
								<div class="mb-4 flex flex-col">
									<label for="ucapan" class="text-base text-formulir">Ucapan</label>
									<textarea class="form-text-area bg-white border rounded transition ease-in-out w-full shadow-lg border-gray-400 focus:text-gray-700 focus:border-nude focus:outline-none" name="ucapan" id="" cols="10" rows="5" placeholder="Tulis ucapan anda disini"></textarea>
								</div>
								<a href="#" class="w-full inline-block text-center bg-nude text-white py-1 rounded hover:bg-nude/90">Kirim ucapan</a>
								<div class="lg:pt-10 pt-4 text-center lg:text-left">
									<p class="text-neutral-500">Jangan lupa untuk konfirmasi kehadiran Anda disini ya.</p>
								</div>
							</div>
							<div class="lg:w-1/2 w-full">
								<div class="lg:mb-6 mb-4 flex flex-col">
									<label for="nama" class="text-base text-formulir">Nama</label>
									<input placeholder="Tulis nama anda disini" type="text" class="form-input bg-white border rounded transition ease-in-out w-full shadow-lg border-gray-400 focus:text-gray-700 focus:border-nude focus:outline-none">
								</div>
								<div class="mb-4 flex flex-col">
									<label for="nama" class="text-base text-formulir">Alamat</label>
									<input placeholder="Tulis alamat anda disini" type="text" class="form-input bg-white border rounded transition ease-in-out w-full shadow-lg border-gray-400 focus:text-gray-700 focus:border-nude focus:outline-none">
								</div>
								<div class="flex items-center mb-4">
									<div class="mr-5">
										<input id="hadir" class="form-radio text-nude mr-2 outline-none focus:outline-none" name="kehadiran" value="hadir" type="radio">
										<label for="hadir" class="text-neutral-500">Hadir</label>
									</div>
									<div>
										<input id="tidak_hadir" class="form-radio text-nude mr-2 outline-none focus:outline-none" name="kehadiran" value="tidak_hadir" type="radio">
										<label for="tidak_hadir" class="text-neutral-500">Tidak Hadir</label>
									</div>

								</div>
								<a href="#" class="w-full inline-block text-center bg-nude text-white py-1 rounded hover:bg-nude/90">Konfirmasi Kehadiran</a>
							</div>
						</div>
					</div>
			</div>
		</div>
	</section>
	<footer class="flex flex-col items-center py-2 bg-white">
		<p class="text-company font-lato">Finitree Projects</p>
		<div class="flex justify-center space-x-3 my-2">
			<a class="w-8 h-8" href="#">
				<img src="../assets/images/ic_wa.png" alt="">
			</a>
			<a class="w-8 h-8" href="#">
				<img src="../assets/images/ic_fb.png" alt="">
			</a>
			<a class="w-8 h-8" href="#">
				<img src="../assets/images/ic_ig.png" alt="">
			</a>
		</div>
		<p class="text-neutral-400 font-lato">2021 Finitree</p>
	</footer>
  </div>
</template>
<style scoped>
  .latar{
    background-image: url('../assets/images/Background.png');
    object-fit: cover;
  }
   .latar2{
    background-image: url('../assets/images/Background-2.png');
    object-fit: cover;
  }
  .latar-modal{
	  background-image: url('../assets/images/bg-modal.png');
	  object-fit: cover;
  }
</style>
