<script>
  function downloadResume() {
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.target = '_blank';
    link.download = 'My_Resume.pdf';
    link.click();
  }
</script>
