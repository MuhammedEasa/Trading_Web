import Image from "next/image";

const Icons = {
    icon: (props: any) => (
        <Image 
            src="/images/Color logo - no background.png" 
            alt="Icon"
            width={34}
            height={34}
            className="object-contain"
            {...props}
        />
    ),
    logo: (props: any) => (
        <Image 
            src="/images/Color logo - no background.png" 
            alt="Logo"
            width={162}
            height={34}
            className="object-contain"
            {...props}
        />
    ),
};

export default Icons;