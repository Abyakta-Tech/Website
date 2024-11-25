export const handleScrollToWelcomeSection = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  const target = document.getElementById('welcomesection');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, ' ');
  }
};
