import React from 'react'

const TruncatedText = ({children,limit, ...props})=>{
    return (
        <div {...props}>{children?.length>limit?children.substr(0,limit)+'...':children}</div>
    )
}

const SearchItem = ({title,description,image,publishedAt,source,content,url}) => {
  return (
    <div className='py-4 px-4'>
    <div className='flex items-center justify-between gap-12'>
        <div>
            <div className='text-sm opacity-60 '><a target='_blank' href={source?.url}>{source?.name}</a></div>
            <div className='text-2xl text-blue-600 cursor-pointer hover:underline'><a target='_blank' href={url}>{title}</a></div>
            <TruncatedText limit={200} className='mt-3 text-gray-500'>{description}</TruncatedText>
            <div className='mt-2 text-sm'>{publishedAt}</div>
        </div>
        <div className='w-[190px] h-[100px] shrink-0 rounded-xl' style={{background : `url(${image}) center center/cover`}}></div>
    </div>
    </div>
  )
}

export default SearchItem