
import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../Url";
import correct from '../assets/icon.gif'

export const Input = () => {

    const [judul, setJudul] =useState("");
    const [responsive, setResponsive] = useState("");
    const [link, setLink] = useState("");
    const [other, setOther] = useState("");
    const [teknologi, setTeknologi] = useState("")
    const [framework, setFramework] = useState("")
    const [keterangan, setKeterangan] = useState("")    
    const [kategoriid, setKategoriid] = useState("")
    const [gambar, setGambar] = useState('');  // Menggunakan state untuk satu file gambar
    const [preview, setPreview] = useState("");
    const [msg, setMsg] =useState("");
    const navigate = useNavigate();


    const [showPopupMsg, setShowPopupMsg] = useState(false);
    const [showPopupgagal, setShowPopupgagal] = useState(false);
    const [showPopupberhasil, setShowPopupber] = useState(false);


    const loadImage = (e) => {
        const gambar = e.target.files[0];
        setGambar(gambar);
        setPreview(URL.createObjectURL(gambar));
      };
    
    const saveProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('judul', judul);
        formData.append('responsive', responsive);
        formData.append('link', link);  // Pastikan nilai yang sesuai di sini
        formData.append('other', other)
        formData.append('teknologi', teknologi)
        formData.append('framework', framework)
        formData.append('gambar', gambar)
        formData.append('kategoriid', kategoriid)
        formData.append('keterangan', keterangan)

        try {
            await axios.post( `${BASE_URL}/product `, formData,   
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
      

            setTimeout(() => {
                showMessageberhasil()
            }, 500);

            
            
            setTimeout(() => {
                navigate("/input");
                window.location.reload();
            }, 4000);     


        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
            showMessageGagal()
        }
    }

    const showMessagePopup = () =>{
        setShowPopupMsg(!showPopupMsg);


      }

      const showMessageberhasil = () =>{
        setShowPopupber(!showPopupberhasil);
      }
      const showMessageGagal = () =>{
        setShowPopupgagal(!showPopupgagal);
      }

  return (
    <div className=' flex flex-col gap-y-20 bg-gray-300 '>

    <div className='flex flex-col items-center w-full h-40'>
       <div className='mt-5 md:mt-20'>  <h1 className=" text-biru font-bold"> Tambah Portofolio </h1></div>
        <div className='flex justify-between items-center w-full h-40'>
            <div className="mt-20 md:ml-20 ml-4 bg-ijo3 rounded-xl text-ijo4 font-bold"><h2 className="mx-4 my-2"> Mau nambah barang apa nih? </h2></div>
            <h2> </h2>
        </div>
    </div>

    <div className='flex justify-center md:mt-20 mt-10'>
        
        <div className=" md:w-[50rem] mx-auto">
            <div className="md:container bg-gray-200 bg-opacity-70 rounded-lg h-full w-[24rem]">

            <form onSubmit= {saveProduct} className='flex flex-col md:gap-y-10 gap-y-[1.2rem] mx-4  text-[1rem] md:text-lg  text-black font-bold'>
                <p className="has-text-centered">{msg}</p>
                <div className="flex flex-col ">
                    <label  className="label has-text-danger mb-2"> Nama Portofolio</label>
                    <div className=" h-5">
                        <input 
                        placeholder=' ' 
                        type="text"
                        value={judul}
                        onChange={(e) => setJudul(e.target.value)}  
                        className='w-full h-10 md:rounded-md rounded-t bg-gray-200 border-solid border-2 border-ijo4 pl-2   ' 
                        />
                    </div>
                </div>



                <div className="flex flex-col ">                  
                    <div className=" ">
                        <div className="select is-fullwidth ">
                        <label  className="label has-text-danger mb-2"> Jenis Kategori</label>
                            <select value={kategoriid} onChange={(e) => setKategoriid(e.target.value)} className='text-white md:rounded rounded-b border-solid border-2 border-ijo4 bg-gray-500' >
                                <option value=""> </option>
                                <option value="e-commerce"> E-commerce </option>
                                <option value="Portofolio"> Portofolio </option>valu
                                <option value="UI/UX"> UI/UX </option>
                                <option value="Education"> Education </option>
                                <option value="Aplication"> Aplication </option>
                                <option value="Tools"> Tools </option>
                                <option value="Blog"> Blog </option>
                                <option value="Lain"> Lainya </option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className=" ">
                    <div className="select is-fullwidth ">
                    <label  className="label has-text-danger mb-2"> Responsive </label>
                        <select value={responsive} onChange={(e) => setResponsive(e.target.value)} className='text-white md:rounded rounded-b border-solid border-2 border-ijo4 bg-gray-500' >
                            <option value=""> </option>
                            <option value="Mobile"> Mobile </option>
                            <option value="PC"> PC</option>
                            <option value="Both"> PC & Mobile</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col ">
                    <label  className="label has-text-warning mb-2"> Teknologi  </label>
                    <div className=" h-5">
                        <input 
                        placeholder='' 
                        type="text"
                        value={teknologi}
                        onChange={(e) => setTeknologi(e.target.value)}  
                        className='w-full h-10 rounded-t bg-gray-200  md:rounded-md border-solid border-2 border-ijo4 pl-2' 
                        />
                    </div>
                </div>   

                <div className="flex flex-col ">
                    <label  className="label has-text-warning mb-2"> Framework  </label>
                    <div className=" h-5">
                        <input 
                        placeholder='' 
                        type="text"
                        value={framework}
                        onChange={(e) =>  setFramework(e.target.value)}  
                        className='w-full h-10 rounded-t bg-gray-200  md:rounded-md border-solid border-2 border-ijo4 pl-2' 
                        />
                    </div>
                </div> 

                <div className="flex flex-col ">
                    <label  className="label has-text-warning mb-2"> Other  </label>
                    <div className=" h-5">
                        <input 
                        placeholder='' 
                        type="text"
                        value={other}
                        onChange={(e) => setOther(e.target.value)}  
                        className='w-full h-10 rounded-t bg-gray-200  md:rounded-md border-solid border-2 border-ijo4 pl-2' 
                        />
                    </div>
                </div> 


                <div className="flex flex-col ">
                    <label  className="label has-text-warning mb-2"> LINK  </label>
                    <div className=" h-5">
                        <input 
                        placeholder='' 
                        type="text"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}  
                        className='w-full h-10 rounded-t bg-gray-200  md:rounded-md border-solid border-2 border-ijo4 pl-2' 
                        />
                    </div>
                </div> 


                <div className="flex flex-col gap-y-3">
                    <label className="label has-text-primary">Keterangan </label>
                    <div className=" h-7">
                        <textarea
                            placeholder='....'
                            name="keterangan"
                            id="keterangan"
                            cols="30"
                            rows="10"
                            value={keterangan}
                            onChange={(e) => setKeterangan(e.target.value)}
                            className='w-full h-10 rounded-md border-solid border-2 border-ijo4 pl-2'
                        >
                        </textarea>
                    </div>
                </div>

                <div className='mb-10'>
                    <label htmlFor="image" className="mb-4 text-xl font-semibold block">
                        Gambar 
                    </label>
                    <input
                        type="file"
                        onChange={loadImage}
                        className="border border-solid border-black p-2 w-full"
                        accept="" // Menghapus properti accept atau set menjadi kosong
                    />
                    <span className="file-cta">
                        <span className="file-label"></span>
                    </span>
                    {preview ? (
                        <figure className="w-[8rem] h-20 object-cover rounded-md mt-2">
                            <img src={preview} alt="Preview Image" />
                        </figure>
                        
                    ) : (
                        ""
                    )}
                </div>



                {showPopupMsg && (
                    <>
                      {/* Konten Popup Message */}
                      <div className="bg-black opacity-50 fixed top-0 left-0 w-full h-full" onClick={showMessagePopup}></div>  
                      <div className="overlay" >
                      <div className="flex justify-center items-center popup w-4/6 h-[4rem] bg-ijo2 rounded-lg text-blue"> 
                        <h1> Menyimpan data tunggu .. </h1>
                      </div>
                      </div>
                     
                    </>
                  )}

                  {showPopupberhasil && (
                        <>
                        <div className="bg-black opacity-50 fixed top-0 left-0 w-full h-full"></div>  
                            <div onClick={showMessageberhasil} className=' fixed flex flex-col justify-center items-center top-[20rem] md:top-[21rem] left-[7rem] md:left-[26rem] w-[12rem] md:w-[23rem] bg-white h-[12rem] md:h-[20rem]'> 
                                <div className='md:w-[20rem] w-[8rem]'>
                                    <img src={correct} alt="" className=' ' />
                                </div>
                                <div>
                                    <h1 className='md:text-xl text-xs text-center'>Horee! Data ditambah  </h1>
                                </div>
                            </div>
                            
                        </>

                    )}
                    {showPopupgagal && (
                        <>
                        < div className="bg-black opacity-50 fixed top-0 left-0 w-full h-full"></div>  
                            <div onClick={showMessageGagal} className=' fixed flex flex-col justify-center items-center top-[20rem] md:top-[21rem] left-[7rem] md:left-[26rem] w-[12rem] md:w-[23rem] bg-white h-[12rem] md:h-[22rem]'> 
                                <div className='md:w-[20rem] w-[8rem]'>
                                    <img src={correct} alt="" className=' ' />
                                </div>
                                <div>
                                    <h1 className='md:text-xl text-xs text-center'>Yah.. Ada Masalah</h1>
                                    <button onClick={showMessagePopup} className='bg-blue rounded ml-6 mt-5 md:ml-8 md:mt-7 '> <h1 className="text-white mx-2 text-sedang md:text-lg"> Coba Lagi</h1></button>
                                </div>
                            </div>
                            
                        </>

                    )}




                
                <div className=" flex mb-5 w-full justify-center items-center h-10 text-white my-4">
                    <div className=" w-[7rem] bg-ijo4 rounded">
                        <button onClick={showMessagePopup} type='submit' className="md:mx-5  mx-6 my-2 "> Simpan</button>
                    </div>
                </div>
                    
            </form>

            </div>
        
        </div>

    </div>

    </div>
  )
}
