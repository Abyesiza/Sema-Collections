export function Footer() {
  return (
    <footer className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg font-serif mb-4">About Sema Collections</h3>
            <p className="text-muted-foreground tracking-wide">
              Premium streetwear brand specializing in custom-made, high-quality essentials.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Shipping</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Size Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground tracking-wide">New Arrivals</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Products</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Collections</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground tracking-wide">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Instagram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Facebook</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground tracking-wide">TikTok</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-16 pt-8 text-center text-muted-foreground tracking-wide">
          <p>&copy; 2024 Sema Collections. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 