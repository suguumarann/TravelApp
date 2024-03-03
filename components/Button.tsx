// Importing the Image component from next/image
import Image from "next/image";

// Defining the type for ButtonProps
type ButtonProps = {
    type: 'button' | 'submit'; // Type for button: button or submit
    title: string; // Title of the button
    icon?: string; // Optional icon for the button
    variant: string; // Variant of the button (e.g., primary, secondary)
    full?: boolean; // Optional prop to make the button full width
}

// Defining the Button component
const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    // Button element with conditional class names based on props
    <button
    className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`} // Concatenating class names
    type={type} // Setting the type of the button
    >
    {/* Rendering the icon if provided */}
    {icon && <Image src={icon} alt={title} width={24} height={24} />}
    {/* Rendering the title of the button */}
    <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button; // Exporting the Button component as default
