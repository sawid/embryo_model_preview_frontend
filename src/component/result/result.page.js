import React from 'react'
import { useState, useRef } from "react";

function findTopItems(predictions, topCount = 5) {
    // Sort the predictions array based on the second object (descending order)
    const sortedPredictions = predictions.sort((a, b) => b[1] - a[1]);

    // Slice the array to get the top items
    const topItems = sortedPredictions.slice(0, topCount);

    return topItems;
}

const Result = () => {

    const predictions = [
        [
            "2-1-1",
            0.0027527939528226852
        ],
        [
            "2-1-2",
            0.015378984622657299
        ],
        [
            "2-1-3",
            0.0018462745938450098
        ],
        [
            "2-2-1",
            0.0004999152733944356
        ],
        [
            "2-2-2",
            0.032366517931222916
        ],
        [
            "2-2-3",
            0.001365120057016611
        ],
        [
            "2-3-3",
            0.003551775822415948
        ],
        [
            "3-1-1",
            0.004005123395472765
        ],
        [
            "3-1-2",
            0.25546935200691223
        ],
        [
            "3-1-3",
            0.009357991628348827
        ],
        [
            "3-2-1",
            0.000484686519484967
        ],
        [
            "3-2-2",
            0.20979639887809753
        ],
        [
            "3-2-3",
            0.18738195300102234
        ],
        [
            "3-3-2",
            2.6156552848988213e-05
        ],
        [
            "3-3-3",
            0.2659781873226166
        ],
        [
            "4-2-2",
            0.0007982888491824269
        ],
        [
            "Arrested",
            0.002728009596467018
        ],
        [
            "Early",
            0.005108961835503578
        ],
        [
            "Morula",
            0.001103541231714189
        ]
    ]

    const top5Items = findTopItems(predictions, 5);
    console.log(top5Items);

    return (
        <div class="h-fit justify-center px-6 py-12 lg:px-8 bg-gray-800">
            <div class="grid grid-cols-6 gap-4 py-20 md:py-12">
                <div class="col-start-2 col-span-5">
                    <div className='grid grid-cols-6'>
                        <div className='col-span-2'>
                            <p className='font-sans text-white text-6xl italic font-bold subpixel-antialiased'>
                                GRADE RESULT<br></br>
                            </p>
                            <div className='my-6'></div>
                            <p className='font-sans text-white text-3xl italic font-semibold subpixel-antialiased thai-font'>
                                ผลการให้คะแนนคุณภาพตัวอ่อน
                            </p>
                        </div>
                        <div className=''>
                            <p className='font-sans text-white text-8xl italic font-bold subpixel-antialiased'>
                                3-1-1<br></br>
                            </p>
                        </div>
                    </div>

                </div>
                <div class="col-start-2 mt-4 col-span-4">
                    <div class="grid grid-cols-6 gap-4">
                        <div className='col-span-2'>
                            <div className='border-solid border-2 border-white-600 h-auto rounded-3xl'>
                                <div className='py-12 px-12'>
                                    <p className='font-sans text-white text-3xl font-semibold thai-font'>ภาพต้นฉบับ</p>
                                    <img className='object-cover h-96 w-96 rounded-2xl my-3' src='https://europeivf.com/assets/uploads/2022/06/europeivf.com-blastocysta-embryotransfer-a-kryokonzervace-blastocysta-1.png' />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-4'>
                            <div className='border-solid border-2 border-white-600 h-auto rounded-3xl'>
                                <div className='pt-12 px-12 pb-36'>
                                    <p className='font-sans text-white text-3xl font-semibold thai-font'>ผลการทาย</p>
                                    <div className='grid grid-cols-3 gap-4 py-3'>
                                        {top5Items.map((prediction, index) => (
                                            <div key={index} className='border-solid border-2 border-white-600 h-auto rounded-xl'>
                                                <p className='px-12 pt-8 font-sans text-white text-3xl font-bold thai-font'>{(index + 1) + ". "}{prediction[0]}</p>
                                                <p className='px-12 pb-8 font-sans text-white text-xl font-semibold thai-font'>{prediction[1].toFixed(5)}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <div className='border-solid border-2 border-white-600 h-auto rounded-3xl'>
                                <div className='py-12 px-12'>
                                    <p className='font-sans text-white text-3xl font-semibold thai-font'>CAM Heat Map</p>
                                    <img className='object-contain h-96 w-96 rounded-2xl my-3' src='https://res.cloudinary.com/da3kzhohj/image/upload/v1709611989/qcik7kxiroexp0ow1t64.png' />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <div className='border-solid border-2 border-white-600 h-auto rounded-3xl'>
                                <div className='py-12 px-12'>
                                    <p className='font-sans text-white text-3xl font-semibold thai-font'>Convolution Layer</p>
                                    <img className='object-contain h-96 w-96 rounded-2xl my-3' src='https://res.cloudinary.com/da3kzhohj/image/upload/v1709611985/a8n2u1funcbqhsxjkp69.png' />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <div className='border-solid border-2 border-white-600 h-auto rounded-3xl'>
                                <div className='py-12 px-12'>
                                    <p className='font-sans text-white text-3xl font-semibold thai-font'>Activation Layer</p>
                                    <img className='object-contain h-96 w-96 rounded-2xl my-3' src='https://res.cloudinary.com/da3kzhohj/image/upload/v1709611986/m3ofn6nplih6jttszgom.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result