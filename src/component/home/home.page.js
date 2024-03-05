import { useState, useRef } from "react";
import React from 'react';

const Home = () => {
    const [modelSelected, setSelectedModel] = useState(0);

    const [selectedFile, setSelectedFile] = useState(null);

    const fileInputRef = useRef(null);

    const toggleButton = (id) => {
        setSelectedModel(id);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    }

    const handleCustomButtonClick = () => {
        // Trigger the file input programmatically
        fileInputRef.current.click();
    };

    console.log(modelSelected)

    return (
        <div class="h-screen justify-center px-6 py-12 lg:px-8 bg-gray-800">
            <div class="grid grid-cols-6 gap-4 py-20 md:py-12">
                <div class="col-start-2 col-span-2">
                    <p className='font-sans text-white text-6xl italic font-bold subpixel-antialiased'>
                        HUMAN EMBRYO<br></br>
                        GRADING MODEL<br></br>
                        DEMONSTRATION<br></br>
                    </p>
                    <div className='my-6'></div>
                    <p className='font-sans text-white text-3xl italic font-semibold subpixel-antialiased thai-font'>
                        สาธิตโมเดลการให้คะแนน<br></br>
                        คุณภาพตัวอ่อน
                    </p>
                </div>
                <div class="col-span-2">
                    <div className='border-solid border-2 border-white-600 h-auto rounded-3xl'>
                        <div className='pt-12 px-12'>
                            <p className='font-sans text-white text-3xl font-semibold thai-font'>เลือกโมเดล</p>
                            <div className="grid grid-cols-2 gap-3 my-4">
                                <div className="">
                                    <button onClick={() => toggleButton(1)} className={modelSelected != 1 ? "bg-transparent hover:bg-white hover:text-gray-800 text-white font-bold py-2 px-4 rounded-xl w-full border-solid border-2 border-white"
                                        : "bg-white hover:bg-white hover:text-gray-800 text-gray-800 font-bold py-2 px-4 rounded-xl w-full border-solid border-2 border-white"}>
                                        InceptionV3
                                    </button>
                                </div>
                                <div className="">
                                    <button onClick={() => toggleButton(2)} className={modelSelected != 2 ? "bg-transparent hover:bg-white hover:text-gray-800 text-white font-bold py-2 px-4 rounded-xl w-full border-solid border-2 border-white"
                                        : "bg-white hover:bg-white hover:text-gray-800 text-gray-800 font-bold py-2 px-4 rounded-xl w-full border-solid border-2 border-white"}>
                                        Xception
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="pt-3 px-12">
                            <p className='font-sans text-white text-3xl font-semibold thai-font'>เลือกภาพ</p>
                            <div className="my-4 bg-transparent hover:bg-white hover:text-gray-800 text-white font-bold py-2 px-4 rounded-xl w-full border-solid border-2 border-white">
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }} // Hide the default file input
                                />
                                {
                                    selectedFile == null ?
                                        <button className="thai-font w-full" onClick={handleCustomButtonClick}>
                                            เลือกภาพ
                                        </button>
                                        :
                                        ""
                                }


                                {selectedFile && (
                                    <div>
                                        <p>{selectedFile.name}</p>
                                        <img
                                            src={URL.createObjectURL(selectedFile)}
                                            alt="Selected File"
                                            style={{ maxWidth: '100%', maxHeight: '300px', marginTop: '10px' }}
                                        />
                                        {/* Display additional information about the file if needed */}
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className="pt-3 px-12 pb-12">
                            <button className="bg-transparent hover:bg-white hover:text-gray-800 text-white font-bold py-2 px-4 rounded-xl w-full border-solid border-2 border-white">
                                Grade It!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home