export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-border/20">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} UniLink. All rights reserved.</p>
        <p className="text-sm mt-2">
          Linking Togetherness!
        </p>
      </div>
    </footer>
  );
}
