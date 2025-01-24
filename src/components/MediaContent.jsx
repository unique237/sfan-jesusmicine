import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { MdOutlineOpenInFull, MdOutlineCloseFullscreen } from "react-icons/md"

const categories = [
  'Média',
  'Productions musicales',
  'Prières Miraculeuses du Père KING',
  'Prier avec Père King'
]

const categoryData = {
  'Média': [assets.img_1, assets.img_2, assets.img_3, assets.img_4],
  'Productions musicales': [
    "https://www.youtube.com/embed/Pf_zSJkCQDo",
    "https://www.youtube.com/embed/Pf_zSJkCQDo",
    "https://www.youtube.com/embed/Pf_zSJkCQDo",
    "https://www.youtube.com/embed/Pf_zSJkCQDo"
  ],
  'Prières Miraculeuses du Père KING': [assets.img_5, assets.img_6, assets.img_7],
  'Prier avec Père King': [assets.img_8, assets.img_9],
}

const MediaContent = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [expandedImage, setExpandedImage] = useState(null)

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const handleImageClick = (index) => {
    setExpandedImage(expandedImage === index ? null : index)
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-500">Médiathèque</h1>
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <div
            key={category}
            className={`p-2 cursor-pointer text-center flex-1 text-sm ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 sm:text-sm'}`}
            onClick={() => handleCategoryClick(category)}
            onMouseEnter={(e) => e.currentTarget.classList.add('bg-blue-300')}
            onMouseLeave={(e) => e.currentTarget.classList.remove('bg-blue-300')}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categoryData[selectedCategory].map((item, index) => (
          <div key={index} className="relative">
            {item.startsWith("https") ? (
              <iframe
                className="h-48 w-full"
                src={item}
                title={`video-${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className={`relative ${expandedImage === index ? 'h-full w-full' : 'h-48 w-full'} bg-center bg-cover`} style={{ backgroundImage: `url(${item})` }}>
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity flex justify-center items-center">
                  <div className="text-white text-center">
                    <h2 className="text-xl font-bold">Image Title</h2>
                    <p className="mt-2">Short description about the image.</p>
                  </div>
                </div>
                {/*<div className="absolute bottom-2 right-2 cursor-pointer text-white" onClick={() => handleImageClick(index)}>
                  {expandedImage === index ? <MdOutlineCloseFullscreen size={24} /> : <MdOutlineOpenInFull size={24} />}
                </div>*/}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MediaContent
